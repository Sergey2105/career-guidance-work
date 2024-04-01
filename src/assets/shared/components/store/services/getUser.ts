import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
    birthday: string;
    chats: any[];
    email: string;
    first_name: string;
    id: number;
    info: string;
    last_name: string;
    meetings: Meeting[];
    my_meeting: Meeting[];
    tags: Tag[];
    telegram: string | null;
    username: string;
    phone: string;
    error: ErrorResponse;
}

interface Meeting {
    id: number;
    author: number;
    title: string;
    body: string;
    seats_bool: boolean;
}

interface Tag {
    id: number;
    tag_name: string;
}

interface ErrorResponse {
    status: number;
    data: {
        error: string;
    };
}

export const getUser = createApi({
    reducerPath: "getUser",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/`,
    }) as BaseQueryFn<string | FetchArgs, unknown, ErrorResponse, {}>,
    endpoints: (builder) => ({
        getUser: builder.query<User, { id: string }>({
            query: ({ id }) => ({
                url: `users/${id}/`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetUserQuery } = getUser;
