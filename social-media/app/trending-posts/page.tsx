import { trendingPosts } from "@/lib/data"
import PostCard from "@/components/post-card"

export default function TrendingPostsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Trending Posts</h1>
          <p className="text-muted-foreground">Posts with the most comments and engagement</p>
        </div>

        <div className="grid gap-6">
          {trendingPosts.slice(0, 10).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

