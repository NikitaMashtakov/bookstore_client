import type { Book } from "../types"
import { api } from "./api"

export const adminApi = api.injectEndpoints({
  endpoints: builder => ({
    createBook: builder.mutation<Book, { name: string; author: string }>({
      query: bookData => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
    }),
    deleteBook: builder.mutation<void, string>({
      query: id => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

const { useCreateBookMutation, useDeleteBookMutation } = adminApi

export const {
  endpoints: { createBook, deleteBook },
} = adminApi
