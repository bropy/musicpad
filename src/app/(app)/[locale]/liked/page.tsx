import { setRequestLocale } from 'next-intl/server'
import { type Locale } from 'next-intl'

import { routing } from '@/pkg/libraries/locale/routing'
import { LikedAlbumsPageModule } from '@/app/modules/liked-albums'

interface IProps {
  params: Promise<{ locale: Locale }>
}

export async function generateStaticParams() {
  const locales = routing.locales

  return locales.map((locale) => ({
    locale,
  }))
}

export default async function LikedAlbumsPage(props: Readonly<IProps>) {
  const { params } = props
  const { locale } = await params

  setRequestLocale(locale)

  return <LikedAlbumsPageModule />
}

