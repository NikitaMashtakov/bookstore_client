import type { Book } from "../types"
import { api } from "./api"

export const likesApi = api.injectEndpoints({
  endpoints: builder => ({
    likeBook: builder.mutation<Book, { bookId: string }>({
      query: body => ({
        url: "/books",
        method: "POST",
        body,
      }),
    }),
    unlikeBook: builder.mutation<void, string>({
      query: bookId => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const { useLikeBookMutation, useUnlikeBookMutation } = likesApi

export const {
  endpoints: { likeBook, unlikeBook },
} = likesApi
