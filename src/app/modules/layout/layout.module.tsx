import { type FC, type ReactNode } from 'react'

import { FooterComponent } from '@/app/widgets/footer'
import { NavbarComponent } from '@/app/widgets/navbar'
import { LikedIndicator } from '@/app/widgets/liked-indicator'

interface IProps {
  children: ReactNode
}

const LayoutModule: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  return (
    <>
      <NavbarComponent />

      {children}

      <FooterComponent />
      
      <LikedIndicator />
    </>
  )
}

export default LayoutModule