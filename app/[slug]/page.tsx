import { fetchPostFromApi } from "@/lib/api-service";
import { getCurrentProjectDomain } from "@/lib/domain-mapper";
import { notFound } from "next/navigation";

// slug to id 매핑 (기존 데이터 기반)
const slugToIdMap: Record<string, string> = {
  "nextjs-blog-tutorial": "1",
  "react-state-management": "2",
  "typescript-getting-started": "3",
  "css-grid-guide": "4",
  "git-basics-to-advanced": "5",
};

// 정적 경로 생성 - 서버 컴포넌트에서만 가능
export function generateStaticParams() {
  return [
    { slug: "nextjs-blog-tutorial" },
    { slug: "react-state-management" },
    { slug: "typescript-getting-started" },
    { slug: "css-grid-guide" },
    { slug: "git-basics-to-advanced" },
  ];
}

// 서버 컴포넌트 - 다이나믹한 컴포넌트를 렌더링
export default async function StaticPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = Number.parseInt(slug);

  if (!id) {
    notFound();
  }
  const communityUrl = "https://bizaccent.com"; // 하드코딩된 도메인 (pbn-domains.json 기반)

  try {
    // API에서 포스트 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, id);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>

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
  } catch (error) {
    console.error("게시물 로드 오류:", error);
    notFound();
  }
}
