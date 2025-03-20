import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import { MessageSquare, Heart, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { getPostById, getUserById } from "@/lib/data"

interface PostPageProps {
  params: {
    id: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostById(Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  const user = getUserById(post.userId)
  const formattedDate = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/feed" className="inline-flex items-center mb-6 text-sm hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to feed
        </Link>

        <Card>
          <CardHeader className="p-6">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <Link href={`/users/${user?.id}`} className="font-medium hover:underline">
                  {user?.name}
                </Link>
                <p className="text-xs text-muted-foreground">@{user?.username}</p>
              </div>
              <p className="text-xs text-muted-foreground ml-auto">{formattedDate}</p>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
              <p className="text-muted-foreground">{post.content}</p>
            </div>
          </CardContent>
          <CardFooter className="p-6 flex justify-between border-t">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-1">
                <Heart className="h-4 w-4" />
                <span>{post.likeCount}</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{post.commentCount}</span>
              </Button>
            </div>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Comments ({post.commentCount})</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground py-8">Comments are not implemented in this demo.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

