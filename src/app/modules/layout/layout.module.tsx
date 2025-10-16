import { type FC, type ReactNode } from 'react'

import { FooterComponent } from '@/app/widgets/footer'
import { NavbarComponent } from '@/app/widgets/navbar'

interface IProps {
  children: ReactNode
}

const LayoutModule: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  return (
    <>
      <NavbarComponent />

      <div className="pt-20">
        {children}
      </div>

      <FooterComponent />
      
    </>
  )
}

export default LayoutModule