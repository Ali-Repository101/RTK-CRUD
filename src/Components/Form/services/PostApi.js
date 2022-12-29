import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["post"],
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => `/`,
      providesTags: ["post"],
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: "/",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const { useGetPostQuery, useAddPostMutation } = postApi;
