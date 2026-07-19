import { createFileRoute } from '@tanstack/react-router'
import Hero from './-components/hero'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
    </div>
  )
}
