export type User = {
  id: string
  email: string
  password: string
  name?: string
  avatarUrl?: string
  DateOfBirth?: Date
  createdAt: Date
  upDatedAt: Date
  bio?: string
  location?: string
  likes: Like[]
  comments: Comment[]
  isAdmin: boolean
}

export type Book = {
  id: string
  name: string
  annotation?: string
  author: Author
  authorId: string
  likes: Like[]
  comments: Comment[]
  createdAt: Date
}

export type Author = {
  id: string
  name: string
  avatarUrl?: string
  books: Book[]
}

export type Like = {
  id: string
  user: User
  userId: string
  book: Book
  bookId: string
}

export type Comment = {
  id: string
  content: string
  user: User
  userId: string
  book: Book
  bookId: string
}
