import { createRouter } from "./context";
import Parser from "rss-parser";

export type BlogItem = {
    title: string,
    date_posted: Date,
    link: string
}

export const blogRouter = createRouter()
    .query("get", {
        async resolve({ ctx }) {
            const parser = new Parser()

            const feed = await parser.parseURL("https://medium.com/feed/@louisjdcharles")
            
            const posts = feed.items.length > 4 ? feed.items.slice(0, 3) : feed.items

            return posts.map(item => { return { title: item.title || '', date_posted: new Date(item.isoDate || 0), link: item.link || '' } }) as BlogItem[]
        }
    })