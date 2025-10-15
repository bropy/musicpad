'use client'

import { ContainerComponent } from '@/app/shared/ui/container'
import { type FC } from 'react'
import { HeroComponent } from '@/app/features/hero'
import { HowItWorksComponent } from '@/app/features/how-it-works'
import { FAQAccordion } from '@/app/features/faq'
import AvailableTests from '@/app/features/tests/test.component'
import PricingPlans from '@/app/features/pricing/pricing.component'
import { CommunitySection } from '@/app/features/community'
import BenefitsSection from '@/app/features/benefits/benefits.component'

// component
const HomeModule: FC = () => {
  // return
  return (
    <ContainerComponent>
      <HeroComponent/>
      <HowItWorksComponent/>
      <AvailableTests/>
      <CommunitySection/>
      <BenefitsSection/>
      <PricingPlans/>
      <FAQAccordion/>
    </ContainerComponent>
  )
}

export default HomeModule

