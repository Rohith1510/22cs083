import Link from "next/link"
import type { User } from "@/lib/data"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, Users } from "lucide-react"

interface UserCardProps {
  user: User
  rank?: number
}

export default function UserCard({ user, rank }: UserCardProps) {
  return (
    <Card>
      <CardHeader className="p-4 pb-0 flex flex-row items-center gap-4">
        {rank && (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
            {rank}
          </div>
        )}
        <Avatar className="h-12 w-12">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <Link href={`/users/${user.id}`} className="font-medium text-lg hover:underline">
            {user.name}
          </Link>
          <p className="text-sm text-muted-foreground">@{user.username}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between mt-2">
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{user.postCount} posts</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{user.followers} followers</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

