'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type TrainerInfo = {
  name: string;
  birthDate: string;
  birthTime: string;
  birthLocation: string;
}

export function TrainerProfile() {
  const [trainerInfo, setTrainerInfo] = useState<TrainerInfo>({
    name: '',
    birthDate: '',
    birthTime: '',
    birthLocation: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setTrainerInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Trainer info submitted:', trainerInfo)
    // Here you would typically send this data to your backend
  }

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Personal Trainer Profile</CardTitle>
        <CardDescription>Enter your details to generate your complete trainer chart</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Trainer Name</Label>
            <Input id="name" name="name" value={trainerInfo.name} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="birthDate">Birth Date</Label>
            <Input id="birthDate" name="birthDate" type="date" value={trainerInfo.birthDate} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="birthTime">Birth Time</Label>
            <Input id="birthTime" name="birthTime" type="time" value={trainerInfo.birthTime} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="birthLocation">Birth Location</Label>
            <Input id="birthLocation" name="birthLocation" value={trainerInfo.birthLocation} onChange={handleInputChange} required />
          </div>
          <Button type="submit">Generate Trainer Chart</Button>
        </form>
      </CardContent>
    </Card>
  )
}

