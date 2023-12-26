import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";
export const quotesApi = createApi({
    reducerPath: "quotesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://quotegenie.onrender.com/user/",
        prepareHeaders: (headers, { getState }) => {
            const authState = getState().root.auth;
            const token = authState ? authState.token : null;
            if (token) {
                headers.set("authorization", token);
                return headers;
            }
        },
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
