import React from "react";
import { useNavigate } from "react-router-dom";
import {
    useGetQuoteOfTheDayQuery,
    useGetQuotesQuery,
} from "../services/quotes";

export default function Home() {
    const navigate = useNavigate();
    const {
        data: quoteOfTheDay,
        isLoading: loadingQuoteOfTheDay,
        isError: errorToGetQuoteOfTheDay,
    } = useGetQuoteOfTheDayQuery();

    const { data: allQuotes, isLoading: loadingAllQuotes } =
        useGetQuotesQuery();

    if (errorToGetQuoteOfTheDay) {
        navigate("/login");
    }

    if (loadingAllQuotes || loadingQuoteOfTheDay) {
        return null;
    }
    console.log(quoteOfTheDay, allQuotes);
    return <div>Home </div>;
}
