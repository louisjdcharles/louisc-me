import { trpc } from "../utils/trpc"

type MediumFeedProps = {
    className?: string
}

const getDateString = (date: Date) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const day = months[date.getDay()]
    const month = date.getMonth()
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
}

const MediumFeed = ({ className } : MediumFeedProps) => {
    
    const blogquery = trpc.useQuery(["blog.get"])

    return (
        <div className={className}>
            <div className="space-y-2">
                <span>My recent blog posts:</span>
                { blogquery.data
                ? <>
                    { blogquery.data.map(item => <p>&bull; <a href={item.link} className="hover:underline">{item.title} ({getDateString(item.date_posted)})</a></p>) }
                </>
                : <span>Loading...</span>
                }
            </div>
        </div>
    )
}

export default MediumFeed