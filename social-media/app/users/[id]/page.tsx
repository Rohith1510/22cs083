import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import PostCard from "@/components/post-card"
import { getUserById, getPostsByUserId } from "@/lib/data"

interface UserPageProps {
  params: {
    id: string
  }
}

export default function UserPage({ params }: UserPageProps) {
  const user = getUserById(Number.parseInt(params.id))

  if (!user) {
    notFound()
  }

  const userPosts = getPostsByUserId(user.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/top-users" className="inline-flex items-center mb-6 text-sm hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to top users
        </Link>

        <Card className="mb-8">
          <CardHeader className="p-6 flex flex-row items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">@{user.username}</p>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="flex gap-6 border-t pt-6">
              <div>
                <p className="font-semibold text-lg">{user.postCount}</p>
                <p className="text-sm text-muted-foreground">Posts</p>
              </div>
              <div>
                <p className="font-semibold text-lg">{user.followers}</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Posts by {user.name}</h2>

          {userPosts.length > 0 ? (
            <div className="grid gap-6">
              {userPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-muted-foreground py-8">This user hasn't posted anything yet.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

