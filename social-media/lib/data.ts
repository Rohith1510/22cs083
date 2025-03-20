export type User = {
    id: number
    name: string
    username: string
    avatar: string
    postCount: number
    followers: number
  }
  
  export type Post = {
    id: number
    userId: number
    title: string
    content: string
    image: string
    commentCount: number
    likeCount: number
    createdAt: string
  }
  
  export type Comment = {
    id: number
    postId: number
    userId: number
    content: string
    createdAt: string
  }
  
  
  export const users: User[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    username: `user${i + 1}`,
    avatar: `/placeholder.svg?height=40&width=40&text=U${i + 1}`,
    postCount: Math.floor(Math.random() * 50) + 1,
    followers: Math.floor(Math.random() * 1000) + 1,
  }))
  
  
  export const topUsers = [...users].sort((a, b) => b.postCount - a.postCount).slice(0, 5)
  
  
  export const posts: Post[] = Array.from({ length: 50 }, (_, i) => {
    const randomUserId = Math.floor(Math.random() * users.length) + 1
    const randomWidth = Math.floor(Math.random() * 200) + 300 
    const randomHeight = Math.floor(Math.random() * 200) + 200 
  
    return {
      id: i + 1,
      userId: randomUserId,
      title: `Post ${i + 1}`,
      content: `This is the content for post ${i + 1}. It contains some interesting information about the topic.`,
      image: `/placeholder.svg?height=${randomHeight}&width=${randomWidth}&text=Post+${i + 1}`,
      commentCount: Math.floor(Math.random() * 100),
      likeCount: Math.floor(Math.random() * 500),
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
    }
  })
  
 
  export const trendingPosts = [...posts].sort((a, b) => b.commentCount - a.commentCount)
  
  
  export const feedPosts = [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  
  
  export const getUserById = (id: number) => {
    return users.find((user) => user.id === id)
  }
  
  
  export const getPostsByUserId = (userId: number) => {
    return posts.filter((post) => post.userId === userId)
  }
  
  
  export const getPostById = (id: number) => {
    return posts.find((post) => post.id === id)
  }
  
  