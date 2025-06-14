import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-700 mb-6">페이지를 찾을 수 없습니다</h2>
      <p className="text-gray-600 mb-8">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
      <Link href="/" className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
        홈으로 돌아가기
      </Link>
    </div>
  )
}
