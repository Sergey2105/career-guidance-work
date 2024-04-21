import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Meetings {
    page: string;
    search?: string | number;
    links: { next: string; previous: string };
    meta: { current_page: number; page_count: number; per_page: number; total_count: number };
    results: any[];
}

interface ErrorResponse {
    status: number;
    data: {
        error: string;
    };
}

export const getMeetings = createApi({
    reducerPath: "getMeetings",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/`,
    }) as BaseQueryFn<string | FetchArgs, unknown, ErrorResponse, {}>,
    endpoints: (builder) => ({
        getMeetings: builder.query<Meetings, { page?: number; search?: string | number }>({
            query: ({ page, search }) => ({
                url: `meeting/${page !== 1 ? `?page=${page}&per_page=10&search=${search}` : `?page=${1}&per_page=10&search=${search}`}/`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetMeetingsQuery } = getMeetings;
