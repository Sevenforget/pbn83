import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-slate-200 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 italic">
            일상의 발견
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              홈
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              카테고리
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              태그
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              소개
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
