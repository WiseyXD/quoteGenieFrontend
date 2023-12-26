import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesApi = createApi({
    reducerPath: "quotesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://quotegenie.onrender.com/user/",
        credentials: "include",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set("authorization", token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getQuotes: builder.query({
            query: () => `allQuotes/`,
        }),
        getQuoteOfTheDay: builder.query({
            query: () => `getQuote/`,
        }),
        signup: builder.mutation({
            query: (credentials) => ({
                url: "signup",
                method: "POST",
                body: credentials,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: "login",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
});

export const {
    useGetQuotesQuery,
    useGetQuoteOfTheDayQuery,
    useLoginMutation,
    useSignupMutation,
} = quotesApi;
