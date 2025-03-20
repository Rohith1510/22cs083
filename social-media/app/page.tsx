import Link from "next/link"
import { BarChart3, TrendingUp, ListFilter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Social Media Analytics</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Track top users, trending posts, and the latest content from your social media platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Link href="/top-users" className="block">
          <Card className="h-full transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Top Users
              </CardTitle>
              <CardDescription>Users with the most posts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">View the top 5 most active users on the platform ranked by number of posts.</p>
              <Button className="w-full mt-4">View Top Users</Button>
            </CardContent>
          </Card>
        </Link>

        <Link href="/trending-posts" className="block">
          <Card className="h-full transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Trending Posts
              </CardTitle>
              <CardDescription>Posts with most engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Discover posts with the maximum number of comments and highest engagement.</p>
              <Button className="w-full mt-4">View Trending Posts</Button>
            </CardContent>
          </Card>
        </Link>

        <Link href="/feed" className="block">
          <Card className="h-full transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <ListFilter className="h-5 w-5" />
                Latest Feed
              </CardTitle>
              <CardDescription>Most recent content</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Browse the latest posts with the newest content appearing at the top.</p>
              <Button className="w-full mt-4">View Feed</Button>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

