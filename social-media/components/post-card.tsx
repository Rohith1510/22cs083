import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { MessageSquare, Heart, Share2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { type Post, getUserById } from "@/lib/data"

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const user = getUserById(post.userId)
  const formattedDate = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
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
        <Link href={`/posts/${post.id}`}>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
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
  )
}

