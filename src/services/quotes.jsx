import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesApi = createApi({
    reducerPath: "quotesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://quotegenie.onrender.com/user/",
    }),
    endpoints: (builder) => ({
        getQuotes: builder.query({
            query: () => `allQuotes/`,
        }),
        getQuoteOfTheDay: builder.query({
            query: () => `getQuote/`,
        }),
    }),
});

export const { useGetQuotesQuery, useGetQuoteOfTheDayQuery } = quotesApi;
