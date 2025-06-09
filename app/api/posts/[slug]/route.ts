"use client"

import { NextResponse } from "next/server"
import type { Post } from "@/types"

// 하드코딩된 데이터
const posts: Post[] = [
  {
    id: "1",
    title: "Next.js로 블로그 만들기",
    content:
      "Next.js는 React 기반의 프레임워크로, 서버 사이드 렌더링과 정적 사이트 생성을 지원합니다. 이 글에서는 Next.js를 사용하여 블로그를 만드는 방법에 대해 알아보겠습니다.\n\n## Next.js 설치하기\n\n```bash\nnpm install next react react-dom\n```\n\n## 프로젝트 구조 설정하기\n\nNext.js 프로젝트의 기본 구조는 다음과 같습니다:\n\n- `pages/`: 라우팅을 위한 페이지 컴포넌트\n- `public/`: 정적 파일 (이미지, 폰트 등)\n- `styles/`: CSS 파일\n\n## 첫 번째 페이지 만들기\n\n```jsx\n// pages/index.js\nexport default function Home() {\n  return (\n    <div>\n      <h1>Welcome to my blog!</h1>\n    </div>\n  )\n}\n```",
    author: "김개발",
    tags: ["Next.js", "React", "웹개발"],
    createdAt: "2023-05-15T09:00:00Z",
    excerpt: "Next.js를 사용하여 블로그를 만드는 방법에 대해 알아보겠습니다.",
    slug: "nextjs-blog-tutorial",
  },
  {
    id: "2",
    title: "React 상태 관리의 모든 것",
    content:
      "React에서 상태 관리는 매우 중요한 개념입니다. 이 글에서는 React의 다양한 상태 관리 방법에 대해 알아보겠습니다.\n\n## useState\n\n가장 기본적인 상태 관리 방법은 `useState` 훅을 사용하는 것입니다.\n\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n```\n\n## useReducer\n\n복잡한 상태 로직을 관리할 때는 `useReducer`를 사용할 수 있습니다.\n\n## Context API\n\n컴포넌트 트리 전체에 데이터를 제공하려면 Context API를 사용할 수 있습니다.\n\n## 외부 라이브러리\n\n- Redux\n- MobX\n- Recoil\n- Zustand\n\n각 라이브러리는 고유한 장단점이 있으므로, 프로젝트의 요구사항에 맞게 선택해야 합니다.",
    author: "박리액트",
    tags: ["React", "상태관리", "프론트엔드"],
    createdAt: "2023-06-20T14:30:00Z",
    excerpt: "React의 다양한 상태 관리 방법에 대해 알아보겠습니다.",
    slug: "react-state-management",
  },
  {
    id: "3",
    title: "TypeScript 시작하기",
    content:
      'TypeScript는 JavaScript의 슈퍼셋 언어로, 정적 타입을 지원합니다. 이 글에서는 TypeScript의 기본 개념과 시작하는 방법에 대해 알아보겠습니다.\n\n## TypeScript 설치하기\n\n```bash\nnpm install -g typescript\n```\n\n## 기본 타입\n\nTypeScript에서는 다양한 기본 타입을 제공합니다.\n\n```typescript\n// 기본 타입\nlet isDone: boolean = false;\nlet decimal: number = 6;\nlet color: string = "blue";\nlet list: number[] = [1, 2, 3];\nlet tuple: [string, number] = ["hello", 10];\n\n// 열거형\nenum Color {Red, Green, Blue}\nlet c: Color = Color.Green;\n\n// Any\nlet notSure: any = 4;\nnotSure = "maybe a string";\n\n// Void\nfunction warnUser(): void {\n  console.log("This is a warning message");\n}\n```\n\n## 인터페이스\n\n인터페이스는 타입을 정의하는 또 다른 방법입니다.\n\n```typescript\ninterface User {\n  name: string;\n  id: number;\n}\n\nconst user: User = {\n  name: "Hayes",\n  id: 0,\n};\n```\n\n## 클래스\n\nTypeScript는 클래스 기반 객체 지향 프로그래밍을 지원합니다.\n\n```typescript\nclass Person {\n  private name: string;\n  \n  constructor(name: string) {\n    this.name = name;\n  }\n  \n  greet() {\n    return `Hello, my name is ${this.name}`;\n  }\n}\n\nconst person = new Person("John");\nconsole.log(person.greet());\n```',
    author: "이타입",
    tags: ["TypeScript", "JavaScript", "프로그래밍"],
    createdAt: "2023-07-10T11:15:00Z",
    excerpt: "TypeScript의 기본 개념과 시작하는 방법에 대해 알아보겠습니다.",
    slug: "typescript-getting-started",
  },
  {
    id: "4",
    title: "CSS Grid 완벽 가이드",
    content:
      'CSS Grid는 웹 레이아웃을 위한 강력한 도구입니다. 이 글에서는 CSS Grid의 기본 개념과 사용법에 대해 알아보겠습니다.\n\n## Grid 컨테이너 설정하기\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 100px 200px;\n  gap: 10px;\n}\n```\n\n## Grid 아이템 배치하기\n\n```css\n.item1 {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n}\n\n.item2 {\n  grid-column: 3 / 4;\n  grid-row: 1 / 3;\n}\n```\n\n## Grid 영역 이름 지정하기\n\n```css\n.container {\n  display: grid;\n  grid-template-areas: \n    "header header header"\n    "sidebar content content"\n    "footer footer footer";\n  grid-template-columns: 1fr 3fr 1fr;\n  grid-template-rows: auto 1fr auto;\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.content { grid_area: content; }\n.footer { grid-area: footer; }\n```\n\n## 반응형 Grid\n\n미디어 쿼리와 함께 사용하면 반응형 레이아웃을 쉽게 만들 수 있습니다.\n\n```css\n@media (max-width: 768px) {\n  .container {\n    grid-template-columns: 1fr;\n    grid-template-areas: \n      "header"\n      "content"\n      "sidebar"\n      "footer";\n  }\n}\n```',
    author: "최디자인",
    tags: ["CSS", "웹디자인", "레이아웃"],
    createdAt: "2023-08-05T16:45:00Z",
    excerpt: "CSS Grid의 기본 개념과 사용법에 대해 알아보겠습니다.",
    slug: "css-grid-guide",
  },
  {
    id: "5",
    title: "Git 기초부터 고급까지",
    content:
      'Git은 현대 소프트웨어 개발에서 필수적인 버전 관리 시스템입니다. 이 글에서는 Git의 기본 개념부터 고급 기능까지 알아보겠습니다.\n\n## Git 설치하기\n\n운영체제에 맞게 Git을 설치합니다.\n\n## 기본 명령어\n\n```bash\n# 저장소 초기화\ngit init\n\n# 파일 스테이징\ngit add <파일명>\n\n# 변경사항 커밋\ngit commit -m "커밋 메시지"\n\n# 원격 저장소 추가\ngit remote add origin <원격 저장소 URL>\n\n# 변경사항 푸시\ngit push -u origin main\n```\n\n## 브랜치 관리\n\n```bash\n# 브랜치 생성\ngit branch <브랜치명>\n\n# 브랜치 전환\ngit checkout <브랜치명>\n# 또는\ngit switch <브랜치명>\n\n# 브랜치 생성 및 전환\ngit checkout -b <브랜치명>\n# 또는\ngit switch -c <브랜치명>\n\n# 브랜치 병합\ngit merge <브랜치명>\n```\n\n## 고급 기능\n\n### 리베이스\n\n```bash\ngit rebase <브랜치명>\n```\n\n### 대화형 리베이스\n\n```bash\ngit rebase -i HEAD~3\n```\n\n### 스태시\n\n```bash\n# 변경사항 임시 저장\ngit stash\n\n# 스태시 목록 확인\ngit stash list\n\n# 스태시 적용\ngit stash apply\n# 또는\ngit stash pop\n```',
    author: "김깃헙",
    tags: ["Git", "버전관리", "개발도구"],
    createdAt: "2023-09-12T13:20:00Z",
    excerpt: "Git의 기본 개념부터 고급 기능까지 알아보겠습니다.",
    slug: "git-basics-to-advanced",
  },
]

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return new NextResponse(JSON.stringify({ error: "Post not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  return NextResponse.json(post)
}
