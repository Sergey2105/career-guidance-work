import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Meeting {
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

export const getMeeting = createApi({
    reducerPath: "getMeeting",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/`,
    }) as BaseQueryFn<string | FetchArgs, unknown, ErrorResponse, {}>,
    endpoints: (builder) => ({
        getMeeting: builder.query<Meeting, { id: string }>({
            query: ({ id }) => ({
                url: `meeting/${id}/`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetMeetingQuery } = getMeeting;
