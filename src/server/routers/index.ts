import { createRouter } from "./context";
import superjson from "superjson";
import { booksRouter } from "./books";
import { blogRouter } from "./medium";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("books.", booksRouter)
  .merge("blog.", blogRouter)

// export type definition of API
export type AppRouter = typeof appRouter;