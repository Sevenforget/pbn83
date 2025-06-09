import Link from "next/link"
import type { Post } from "@/types"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="group rounded-lg border border-gray-200 p-5 hover:border-gray-300 hover:bg-slate-50 transition-all h-full shadow-sm hover:shadow-md transform hover:-translate-y-1 duration-200">
      <Link href={`/${post.slug}`} className="flex flex-col h-full">
        <div className="space-y-3 flex-grow">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-gray-700">{post.title}</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <p className="text-gray-600 line-clamp-3 border-l-4 border-slate-200 pl-3 py-1 italic">{post.excerpt}</p>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 mt-auto">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 hover:bg-slate-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </div>
  )
}
