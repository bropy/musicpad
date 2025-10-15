import * as Sentry from '@sentry/nextjs'
import type { SeverityLevel } from '@sentry/nextjs'

export { Sentry } from './sentry.client'
export { SentryProvider } from './sentry.provider'

export const captureException = (error: Error, context?: Record<string, string>) => {
  console.log('Capturing exception to Sentry:', error.message, context)
  Sentry.captureException(error, {
    tags: context,
    level: 'error'
  })
}

export const captureMessage = (message: string, level: SeverityLevel = 'info') => {
  console.log('Capturing message to Sentry:', message, level)
  Sentry.captureMessage(message, level)
}

export const setUserContext = (user: { id: string; email?: string; username?: string }) => {
  Sentry.setUser(user)
}

export const addBreadcrumb = (message: string, category?: string, level?: SeverityLevel) => {
  Sentry.addBreadcrumb({
    message,
    category: category || 'user',
    level: level || 'info',
    timestamp: Date.now() / 1000
  })
}
