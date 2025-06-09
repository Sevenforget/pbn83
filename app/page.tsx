import { PostCard } from "@/components/post-card"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import type { Post } from "@/types"

// 하드코딩된 데이터
const posts: Post[] = [
  {
    id: "1",
    title: "Next.js로 블로그 만들기",
    content: "Next.js는 React 기반의 프레임워크로...",
    author: "김개발",
    tags: ["Next.js", "React", "웹개발"],
    createdAt: "2023-05-15T09:00:00Z",
    excerpt: "Next.js를 사용하여 블로그를 만드는 방법에 대해 알아보겠습니다.",
    slug: "nextjs-blog-tutorial",
  },
  {
    id: "2",
    title: "React 상태 관리의 모든 것",
    content: "React에서 상태 관리는 매우 중요한 개념입니다...",
    author: "박리액트",
    tags: ["React", "상태관리", "프론트엔드"],
    createdAt: "2023-06-20T14:30:00Z",
    excerpt: "React의 다양한 상태 관리 방법에 대해 알아보겠습니다.",
    slug: "react-state-management",
  },
  {
    id: "3",
    title: "TypeScript 시작하기",
    content: "TypeScript는 JavaScript의 슈퍼셋 언어로...",
    author: "이타입",
    tags: ["TypeScript", "JavaScript", "프로그래밍"],
    createdAt: "2023-07-10T11:15:00Z",
    excerpt: "TypeScript의 기본 개념과 시작하는 방법에 대해 알아보겠습니다.",
    slug: "typescript-getting-started",
  },
  {
    id: "4",
    title: "CSS Grid 완벽 가이드",
    content: "CSS Grid는 웹 레이아웃을 위한 강력한 도구입니다...",
    author: "최디자인",
    tags: ["CSS", "웹디자인", "레이아웃"],
    createdAt: "2023-08-05T16:45:00Z",
    excerpt: "CSS Grid의 기본 개념과 사용법에 대해 알아보겠습니다.",
    slug: "css-grid-guide",
  },
  {
    id: "5",
    title: "Git 기초부터 고급까지",
    content: "Git은 현대 소프트웨어 개발에서 필수적인 버전 관리 시스템입니다...",
    author: "김깃헙",
    tags: ["Git", "버전관리", "개발도구"],
    createdAt: "2023-09-12T13:20:00Z",
    excerpt: "Git의 기본 개념부터 고급 기능까지 알아보겠습니다.",
    slug: "git-basics-to-advanced",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 메인 콘텐츠 영역 */}
          <main className="lg:col-span-8 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">최신 글</h1>
              <p className="text-gray-600">일상의 발견 블로그의 최신 글을 확인하세요.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </main>

          {/* 사이드바 영역 */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </div>
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-500">© 2023 일상의 발견. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
