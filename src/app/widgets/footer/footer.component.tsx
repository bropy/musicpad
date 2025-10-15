'use client'

import { type FC } from 'react'
import { Divider } from '@heroui/divider'
import { Link } from '@/pkg/libraries/locale/navigation'
import { useTranslations } from 'next-intl'


// component
const FooterComponent: FC = () => {
  const t = useTranslations()

  // return
  return (
    <footer className='bg-black border-t border-red-600/20 px-6 pt-16 pb-8'>

    </footer>
  )
}

export default FooterComponent