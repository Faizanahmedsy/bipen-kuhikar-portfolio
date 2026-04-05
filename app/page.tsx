import { getSiteContent } from "@/lib/sanity"
import HomePage from "@/components/HomePage"

// Revalidate every 60 seconds (ISR)
export const revalidate = 60

export default async function Page() {
  const data = await getSiteContent()
  return <HomePage data={data} />
}
