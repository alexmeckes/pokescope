'use client'

import * as React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Swords, Users, Brain, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

type InsightRarity = 'Standard' | 'Shiny' | 'Legendary' | 'Mythical'

type InsightCategory = 'Daily Focus' | 'Daily Challenges' | 'Relationships' | 'Self-Discovery'

type Insight = {
  category: InsightCategory;
  description: string;
  rarity: InsightRarity;
}

const insightPool: Insight[] = [
  // Standard Insights
  { 
    category: 'Daily Focus', 
    description: 'The stars align with Pikachu\'s electric energy today. Your quick thinking and agility will serve you well in tackling tasks.', 
    rarity: 'Standard' 
  },
  { 
    category: 'Daily Challenges', 
    description: 'Like a wise Alakazam, approach today\'s challenges with patience. Mars\' position hints at surprising opportunities.', 
    rarity: 'Standard' 
  },
  { 
    category: 'Relationships', 
    description: 'The warmth of Flareon\'s influence brings harmony to your social circle. A great day for strengthening bonds.', 
    rarity: 'Standard' 
  },
  { 
    category: 'Self-Discovery', 
    description: 'Under Gardevoir\'s intuitive influence, your emotional intelligence is heightened. Take time for self-reflection.', 
    rarity: 'Standard' 
  },

  // Shiny Insights
  { 
    category: 'Daily Focus', 
    description: 'Mewtwo\'s psychic energy amplifies your mental clarity. An excellent time for strategic planning and important decisions.', 
    rarity: 'Shiny' 
  },
  { 
    category: 'Daily Challenges', 
    description: 'Channel Dragonite\'s serene strength today. Like calm waters before a storm, prepare for transformative changes ahead.', 
    rarity: 'Shiny' 
  },
  { 
    category: 'Relationships', 
    description: 'Togekiss\'s joyful aura surrounds your social sphere. Unexpected connections could blossom into meaningful relationships.', 
    rarity: 'Shiny' 
  },
  { 
    category: 'Self-Discovery', 
    description: 'The wisdom of Espeon illuminates your path. Hidden talents emerge as Mercury enters your house of creativity.', 
    rarity: 'Shiny' 
  },

  // Legendary Insights
  { 
    category: 'Daily Focus', 
    description: 'Rayquaza\'s cosmic energy aligns with your ambitions. The stars suggest a breakthrough in a long-term project.', 
    rarity: 'Legendary' 
  },
  { 
    category: 'Daily Challenges', 
    description: 'Like Lugia calming the stormy seas, your presence will bring balance to chaotic situations today.', 
    rarity: 'Legendary' 
  },
  { 
    category: 'Relationships', 
    description: 'The celestial dance of Latias and Latios influences your partnerships. A profound connection may deepen today.', 
    rarity: 'Legendary' 
  },
  { 
    category: 'Self-Discovery', 
    description: 'Mew\'s ancient wisdom resonates with your soul. A rare alignment reveals deeper truths about your life\'s purpose.', 
    rarity: 'Legendary' 
  },

  // Mythical Insights
  { 
    category: 'Daily Focus', 
    description: 'Arceus\'s divine energy flows through your endeavors. The cosmos aligns perfectly for manifestation and achievement.', 
    rarity: 'Mythical' 
  },
  { 
    category: 'Daily Challenges', 
    description: 'Celebi\'s time-bending influence reveals the perfect moment for action. Trust your instincts as they\'ve never been sharper.', 
    rarity: 'Mythical' 
  },
  { 
    category: 'Relationships', 
    description: 'Under Jirachi\'s wishmaking influence, your deepest relationship aspirations may materialize in unexpected ways.', 
    rarity: 'Mythical' 
  },
  { 
    category: 'Self-Discovery', 
    description: 'Hoopa\'s rings create a gateway to self-understanding. A once-in-a-lifetime opportunity for personal transformation approaches.', 
    rarity: 'Mythical' 
  },
];

const rarityColors: Record<InsightRarity, string> = {
  Standard: 'bg-card border-border',
  Shiny: 'bg-yellow-950/50 border-yellow-600/50',
  Legendary: 'bg-purple-950/50 border-purple-600/50',
  Mythical: 'bg-pink-950/50 border-pink-600/50'
}

const categoryIcons: Record<InsightCategory, LucideIcon> = {
  'Daily Focus': Zap,
  'Daily Challenges': Swords,
  'Relationships': Users,
  'Self-Discovery': Brain
}

export const DailyInsights: React.FC = () => {
  const [insights, setInsights] = React.useState<Insight[]>([])

  React.useEffect(() => {
    const generateInsights = () => {
      const newInsights: Insight[] = []
      const categories: InsightCategory[] = ['Daily Focus', 'Daily Challenges', 'Relationships', 'Self-Discovery']
      
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

