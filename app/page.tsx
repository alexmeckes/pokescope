import { DailyInsights } from "@/components/daily-insights"
import type { FC } from 'react'

const Home: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 space-y-8 relative z-10">
      <div className="z-10 w-full max-w-4xl">
        <h1 className="text-6xl font-bold mb-12 text-center heading-gradient font-display hover-glow">
          PokéScope
        </h1>
        <DailyInsights />
      </div>
    </main>
  )
}

export default Home

