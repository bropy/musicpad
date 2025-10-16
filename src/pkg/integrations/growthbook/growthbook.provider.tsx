'use client'

import { GrowthBook, GrowthBookProvider as GBProvider } from '@growthbook/growthbook-react'
import { useEffect } from 'react'
import { envClient } from '@/config/env'

const growthbook = new GrowthBook({
  apiHost: envClient.NEXT_PUBLIC_GROWTHBOOK_API_HOST,
  clientKey: envClient.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
  enableDevMode: process.env.NODE_ENV === 'development',
})

export function GrowthBookProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    growthbook.loadFeatures()
      .then(() => {
        console.log('GrowthBook features loaded:', growthbook.getFeatures())
      })
      .catch((error) => {
        console.error('Failed to load GrowthBook features:', error)
        // Set default fallback features when API fails
        growthbook.setFeatures({
          'button-on-hero': {
            defaultValue: false,  // Changed to false
            rules: []
          }
        })
      })
  }, [])

  return (
    <GBProvider growthbook={growthbook}>
      {children}
    </GBProvider>
  )
}

