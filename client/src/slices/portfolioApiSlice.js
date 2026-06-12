import { PORTFOLIO_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const portfolioApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublicPortfolio: builder.query({
      query: (username) => ({
        url: `${PORTFOLIO_URL}/${username}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Portfolio"],
    }),
  }),
});

export const { useGetPublicPortfolioQuery } = portfolioApiSlice;
