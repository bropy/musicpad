'use client'

import { ContainerComponent } from '@/app/shared/ui/container'
import { type FC } from 'react'
import { HeroComponent } from '@/app/features/hero'
import { HowItWorksComponent } from '@/app/features/how-it-works'
import { LikedAlbumsComponent } from '@/app/features/liked-albums'

const HomeModule: FC = () => {
  return (
    <ContainerComponent>
      <HeroComponent/>
      <HowItWorksComponent/>
      <LikedAlbumsComponent/>
    </ContainerComponent>
  )
}

export default HomeModule

