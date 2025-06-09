"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import type { Post } from "@/types"

export function Sidebar() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    // 클라이언트 사이드에서 데이터 가져오기
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error))
  }, [])

  // 모든 태그 추출 및 중복 제거
  const allTags = posts.reduce((tags, post) => {
    if (post.tags) {
      return [...tags, ...post.tags]
    }
    return tags
  }, [] as string[])

  const uniqueTags = Array.from(new Set(allTags))

  // 최근 글 5개만 표시
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5)

  return (
    <aside className="space-y-8">
      {/* 프로필 섹션 */}
      <div className="rounded-lg border bg-card p-5 shadow-sm">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">블로그 소개</h2>
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
            <img src="/abstract-profile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <p className="text-gray-600 text-sm mt-2 italic">생각의 조각들을 모아 세상과 나누는 공간입니다.</p>
        </div>
      </div>

      {/* 최근 글 */}
      <div className="rounded-lg border bg-card p-5 shadow-sm">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">최근 글</h2>
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/${post.slug}`} className="text-sm hover:text-gray-900 hover:underline line-clamp-1">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 태그 클라우드 */}
      <div className="rounded-lg border bg-card p-5 shadow-sm">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">태그</h2>
        <div className="flex flex-wrap gap-2">
          {uniqueTags.map((tag) => (
            <Link
              href={`#${tag}`}
              key={tag}
              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 hover:bg-gray-200"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* 아카이브 */}
      <div className="rounded-lg border bg-card p-5 shadow-sm">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">아카이브</h2>
        <ul className="space-y-1">
          <li>
            <Link href="#" className="text-sm hover:text-gray-900 hover:underline">
              2023년 9월
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-gray-900 hover:underline">
              2023년 8월
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-gray-900 hover:underline">
              2023년 7월
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-gray-900 hover:underline">
              2023년 6월
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm hover:text-gray-900 hover:underline">
              2023년 5월
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
