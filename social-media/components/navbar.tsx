import Link from "next/link"
import { BarChart3, TrendingUp, ListFilter, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          <span className="hidden sm:inline">Social Analytics</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              <Home className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>
          <Link href="/top-users">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              <BarChart3 className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Top Users</span>
            </Button>
          </Link>
          <Link href="/trending-posts">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              <TrendingUp className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Trending</span>
            </Button>
          </Link>
          <Link href="/feed">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              <ListFilter className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Feed</span>
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

