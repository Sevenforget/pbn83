"use client";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";
import type { Post } from "@/types";
import { formatDate } from "@/lib/utils";

interface PostDetailProps {
  post: Post;
}

export function PostDetail({ post }: PostDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 메인 콘텐츠 영역 */}
          <main className="lg:col-span-8">
            <article>
              <div className="mb-8">
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 inline-flex items-center mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  목록으로 돌아가기
                </Link>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-2 text-gray-500 mb-6">
                  <span className="font-medium">{post.author}</span>
                  <span>•</span>
                  <time dateTime={post.createdAt}>
                    {formatDate(new Date(post.createdAt))}
                  </time>
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {paragraph.substring(3)}
                      </h2>
                    );
                  } else if (paragraph.startsWith("```")) {
                    const codeContent = paragraph
                      .split("\n")
                      .slice(1, -1)
                      .join("\n");
                    return (
                      <pre
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"
                      >
                        <code>{codeContent}</code>
                      </pre>
                    );
                  } else {
                    return (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                }) }}>
              </div>
            </article>
          </main>

          {/* 사이드바 영역 */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </div>
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-500">
            © 2023 일상의 발견. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
