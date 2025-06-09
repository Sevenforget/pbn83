"use client"
import StaticClient from "./static-client"

export default function StaticClientPage({ params }: { params: { slug: string } }) {
  return <StaticClient params={params} />
}
