import { trpc } from "../utils/trpc"

type BooksFeedProps = {
    className?: string
}

const BooksFeed = ({ className } : BooksFeedProps) => {
    
    const booksquery = trpc.useQuery(["books.get"])

    return (
        <div className={className}>
            <div className="space-y-2">
                <span>I am currently reading:</span>
                { booksquery.data
                ? <>
                    { booksquery.data.map((item, k) => <p key={k}>&bull; {item.title}</p>) }
                </>
                : <span>Loading...</span>
                }
            </div>
        </div>
    )
}

export default BooksFeed