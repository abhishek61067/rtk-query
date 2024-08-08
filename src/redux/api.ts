import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// createApi()
// In most cases, you should use this once per app, with "one API slice(createApi) per base URL" as a rule of thumb.
export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    postPosts: builder.mutation({
      query: (data: any) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery, usePostPostsMutation } = myApi;
