import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { setRequestLocale } from 'next-intl/server'
import { type Locale } from 'next-intl'

import { getQueryClient, allTopAlbumsQueryOptions } from '@/pkg/libraries/rest-api'
import { routing } from '@/pkg/libraries/locale/routing'
import { AlbumsModule } from '@/app/modules/album'

interface IProps {
  params: Promise<{ locale: Locale }>
}

export const revalidate = 300

export async function generateStaticParams() {
  const locales = routing.locales

  return locales.map((locale) => ({
    locale,
  }))
}

export default async function AlbumsPage(props: Readonly<IProps>) {
  const { params } = props
  const { locale } = await params

  setRequestLocale(locale)

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(allTopAlbumsQueryOptions())

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AlbumsModule />
    </HydrationBoundary>
  )
}

