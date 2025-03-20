import { topUsers } from "@/lib/data"
import UserCard from "@/components/user-card"

export default function TopUsersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Top Users</h1>
          <p className="text-muted-foreground">Users with the most posts on the platform</p>
        </div>

        <div className="grid gap-4">
          {topUsers.map((user, index) => (
            <UserCard key={user.id} user={user} rank={index + 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

