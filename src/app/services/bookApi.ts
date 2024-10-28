import type { Book } from "../types"
import { api } from "./api"

export const bookApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllBooks: builder.query<Book[], string>({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
    }),
    getBookById: builder.query<Book, string>({
      query: id => ({
        url: `/books/${id}`,
        method: "GET",
      }),
    }),
  }),
})

const {
  useGetAllBooksQuery,
  useLazyGetAllBooksQuery,
  useGetBookByIdQuery,
  useLazyGetBookByIdQuery,
} = bookApi

export const {
  endpoints: { getAllBooks, getBookById },
} = bookApi
