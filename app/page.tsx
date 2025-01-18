import { DailyInsights } from "@/components/daily-insights"
import type { FC } from 'react'

const Home: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 space-y-8 bg-gradient-to-b from-background to-accent overflow-hidden relative">
      <div className="z-10 w-full max-w-4xl">
        <h1 className="text-6xl font-bold mb-4 text-center heading-gradient font-display hover-glow">
          PokéScope
        </h1>
        <p className="text-xl mb-12 text-center text-muted-foreground text-shadow">
          Where Astrology Meets Pokémon
        </p>
        <DailyInsights />
      </div>
    </main>
  )
}

export default Home

