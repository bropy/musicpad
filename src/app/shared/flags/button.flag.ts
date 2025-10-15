import { FeatureFlagKey } from '@/pkg/integrations/growthbook'

export const FEATURE_FLAGS = {
  HERO_BUTTON: 'button-on-hero' as FeatureFlagKey,
} as const

export type FeatureFlags = typeof FEATURE_FLAGS

