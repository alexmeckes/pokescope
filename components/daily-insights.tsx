'use client'

import * as React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Swords, Users, Brain, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

type InsightRarity = 'Standard' | 'Shiny' | 'Legendary' | 'Mythical'

type InsightCategory = 'Training Focus' | 'Battle Outlook' | 'Team Dynamics' | 'Personal Growth'

type Insight = {
  category: InsightCategory;
  description: string;
  rarity: InsightRarity;
}

const insightPool: Insight[] = [
  { category: 'Training Focus', description: 'Focus on speed training today. Your Pokémon will have extra energy for agility exercises.', rarity: 'Standard' },
  { category: 'Battle Outlook', description: 'Be cautious in battles. The alignment of Mars suggests potential for unexpected outcomes.', rarity: 'Standard' },
  { category: 'Team Dynamics', description: 'Your fire-type Pokémon are in harmony. Consider team-building exercises to strengthen bonds.', rarity: 'Standard' },
  { category: 'Personal Growth', description: 'Reflect on your recent battles. There\'s a valuable lesson hiding in your latest defeat.', rarity: 'Standard' },
  { category: 'Training Focus', description: 'Rare cosmic alignment boosts your Pokémon\'s special attack. Focus on moves like Psychic or Flamethrower.', rarity: 'Shiny' },
  { category: 'Battle Outlook', description: 'The stars predict an epic battle ahead. Trust your instincts and lead your team to victory!', rarity: 'Shiny' },
  { category: 'Team Dynamics', description: 'A legendary bond is forming in your team. Pay attention to unexpected partnerships.', rarity: 'Legendary' },
  { category: 'Personal Growth', description: 'The wisdom of Arceus touches your spirit. Meditate on the true meaning of being a Pokémon master.', rarity: 'Mythical' },
]

const rarityColors: Record<InsightRarity, string> = {
  Standard: 'bg-card border-border',
  Shiny: 'bg-yellow-950/50 border-yellow-600/50',
  Legendary: 'bg-purple-950/50 border-purple-600/50',
  Mythical: 'bg-pink-950/50 border-pink-600/50'
}

const categoryIcons: Record<InsightCategory, LucideIcon> = {
  'Training Focus': Zap,
  'Battle Outlook': Swords,
  'Team Dynamics': Users,
  'Personal Growth': Brain
}

export const DailyInsights: React.FC = () => {
  const [insights, setInsights] = React.useState<Insight[]>([])

  React.useEffect(() => {
    const generateInsights = () => {
      const newInsights: Insight[] = []
      const categories: InsightCategory[] = ['Training Focus', 'Battle Outlook', 'Team Dynamics', 'Personal Growth']
      
      categories.forEach(category => {
        const rarityRoll = Math.random()
        let rarity: InsightRarity = 'Standard'
        if (rarityRoll < 0.01) rarity = 'Mythical'
        else if (rarityRoll < 0.05) rarity = 'Legendary'
        else if (rarityRoll < 0.15) rarity = 'Shiny'

        const categoryInsights = insightPool.filter(insight => insight.category === category && insight.rarity === rarity)
        if (categoryInsights.length > 0) {
          newInsights.push(categoryInsights[Math.floor(Math.random() * categoryInsights.length)])
        } else {
          const standardInsights = insightPool.filter(insight => insight.category === category && insight.rarity === 'Standard')
          newInsights.push(standardInsights[Math.floor(Math.random() * standardInsights.length)])
        }
      })

      setInsights(newInsights)
    }

    generateInsights()
  }, [])

  return (
    <div className="insights-grid">
      <div className="col-span-full text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2 hover-glow">
          <Sparkles className="h-8 w-8 text-yellow-400" />
          Daily Insights
        </h2>
        <p className="text-muted-foreground">Where Astrology Meets Pokémon</p>
      </div>
      {insights.map((insight: Insight, index: number) => {
        const Icon = categoryIcons[insight.category]
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`insight-card ${rarityColors[insight.rarity]} glass`}>
              <CardHeader className="card-header">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  {insight.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="card-content">
                <p className="text-sm text-card-foreground/80">{insight.description}</p>
                <Badge 
                  className={`badge mt-4 bg-transparent border-current text-current inline-flex w-auto px-3 py-1 ${insight.rarity !== 'Standard' ? 'loading-shimmer' : ''}`}
                >
                  {insight.rarity}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}

