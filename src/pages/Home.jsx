import React from "react";
import {
    useGetQuoteOfTheDayQuery,
    useGetQuotesQuery,
} from "../services/quotes";

export default function Home() {
    const { data: quoteOfTheDay, isLoading: loadingQuoteOfTheDay } =
        useGetQuoteOfTheDayQuery();
    const { data: allQuotes, isLoading: loadingAllQuotes } =
        useGetQuotesQuery();
    if (loadingAllQuotes || loadingQuoteOfTheDay) {
        return null;
    }
    console.log(quoteOfTheDay, allQuotes);
    return <div>Home </div>;
}
