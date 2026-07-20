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
    getPortfolio: builder.query({
      query: () => ({
        url: `${PORTFOLIO_URL}/me`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Portfolio"],
    }),
    updatePortfolio: builder.mutation({
      query: (credentials) => ({
        url: `${PORTFOLIO_URL}/`,
        method: "Put",
        body: credentials,
      }),
    }),

    uploadImage: builder.mutation({
      query: (data) => ({
        url: "upload",
        method: "POST",
        body: data,
      }),
    }),

    deleteProject: builder.mutation({
      query: (projectId) => ({
        url: `${PORTFOLIO_URL}/projects/${projectId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Portfolio"],
    }),

    createPortfolio: builder.mutation({
      query: (data) => ({
        url: `${PORTFOLIO_URL}/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Portfolio"],
    }),
    createProject: builder.mutation({
      query: (data) => ({
        url: `${PORTFOLIO_URL}/projects`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Portfolio"],
    }),

    updateProject: builder.mutation({
      query: ({ projectId, formData }) => ({
        url: `${PORTFOLIO_URL}/projects/${projectId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Portfolio"],
    }),
  }),
});

export const {
  useGetPublicPortfolioQuery,
  useGetPortfolioQuery,
  useUpdatePortfolioMutation,
  useUploadImageMutation,
  useDeleteProjectMutation,
  useCreateProjectMutation,
  useCreatePortfolioMutation,
  useUpdateProjectMutation,
} = portfolioApiSlice;
