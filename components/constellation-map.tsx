'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Constellation = {
  id: string;
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Ultra Rare' | 'Mythical';
  description: string;
  isVisible: boolean;
}

const constellations: Constellation[] = [
  { id: 'gyarados', name: 'The Eternal Gyarados', rarity: 'Common', description: 'A sea serpent of great power', isVisible: true },
  { id: 'arcanine', name: 'The Guardian Arcanine', rarity: 'Common', description: 'A protective spirit', isVisible: true },
  { id: 'plusle-minun', name: 'The Twin Plusle & Minun', rarity: 'Common', description: 'Representing duality', isVisible: true },
  { id: 'mewtwo', name: 'The Astral Mewtwo', rarity: 'Ultra Rare', description: 'Visible only during solar eclipses', isVisible: false },
  { id: 'arceus', name: 'The Origin Arceus', rarity: 'Mythical', description: 'Appears once per year during specific stellar conjunction', isVisible: false },
]

export function ConstellationMap() {
  const [selectedConstellation, setSelectedConstellation] = useState<Constellation | null>(null)

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Pokémon Constellation Map</CardTitle>
        <CardDescription>Discover the celestial Pokémon in the night sky</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            {constellations.map(constellation => (
              <button
                key={constellation.id}
                className={`w-full text-left p-2 rounded ${constellation.isVisible ? 'bg-secondary' : 'bg-muted'} hover:bg-accent`}
                onClick={() => setSelectedConstellation(constellation)}
              >
                {constellation.name} ({constellation.rarity})
              </button>
            ))}
          </div>
          <div>
            {selectedConstellation && (
              <div>
                <h3 className="text-lg font-semibold">{selectedConstellation.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedConstellation.rarity}</p>
                <p className="mt-2">{selectedConstellation.description}</p>
                <p className="mt-2">
                  {selectedConstellation.isVisible 
                    ? "This constellation is currently visible in the night sky!" 
                    : "This constellation is not currently visible."}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

