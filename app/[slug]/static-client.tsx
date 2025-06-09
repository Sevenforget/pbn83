"use client";
import { fetchPostFromApi } from "@/lib/api-service";
import { getCurrentProjectDomain } from "@/lib/domain-mapper";
import type { Post } from "@/lib/types";
import { useEffect, useState } from "react";

export default function StaticClient({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // slug를 그대로 id로 사용
  const id = Number.parseInt(params.slug);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        // 현재 프로젝트의 도메인 가져오기
        const communityUrl = getCurrentProjectDomain();

        // API에서 게시물 데이터 가져오기
        const postData = await fetchPostFromApi(communityUrl, id);
        setPost(postData);
      } catch (err) {
        console.error("게시물 로드 실패:", err);
        setError("게시물을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4 mx-auto"></div>
          <p>게시물을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-600">
            {error || "포스트를 찾을 수 없습니다"}
          </h1>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            뒤로 가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
          <span>작성자: {post.author}</span>
          <span>
            작성일: {new Date(post.createdAt).toLocaleDateString("ko-KR")}
          </span>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose max-w-none">
          <div
            className="text-gray-700 leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      </article>
    </div>
  );
}
