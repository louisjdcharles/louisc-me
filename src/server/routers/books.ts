import { createRouter } from "./context";
import Parser from "rss-parser";

export type BookItem = {
    title: string
}

export const booksRouter = createRouter()
    .query("get", {
        async resolve({ ctx }) {
            const parser = new Parser()

            const feed = await parser.parseURL("https://www.goodreads.com/review/list_rss/149512363?key=n2G3kbI4eGAqybgjxaGmWowwODeoR2fpzrIaOAac4YRf4vvP&shelf=currently-reading")

            return feed.items.map(item => { return { title: item.title || '' } }) as BookItem[]
        }
    })