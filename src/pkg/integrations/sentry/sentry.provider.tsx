'use client'

import { useEffect } from 'react'
import { Sentry } from './sentry.client'

export function SentryProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Sentry.setContext('app', {
      name: 'MusicPad',
      version: '1.0.0'
    })
  }, [])

  return <>{children}</>
}

