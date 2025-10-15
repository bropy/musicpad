import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { setRequestLocale } from 'next-intl/server'
import { type Locale } from 'next-intl'
import { notFound } from 'next/navigation'

import { getQueryClient, albumBySlugFromLastFmQueryOptions, lastFmService } from '@/pkg/libraries/rest-api'
import { routing } from '@/pkg/libraries/locale/routing'
import { AlbumDetailModule } from '@/app/modules/album'

interface IProps {
  params: Promise<{ slug: string; locale: Locale }>
}

export const revalidate = 300

export async function generateStaticParams() {
  try {
    const albums = await lastFmService.getAllTopAlbums()
    const locales = routing.locales

    return locales.flatMap((locale) =>
      albums.map((album) => ({
        locale,
        slug: album.slug,
      }))
    )
  } catch (error) {
    console.error('Error generating static params for albums:', error)
    return []
  }
}

export default async function AlbumPage(props: Readonly<IProps>) {
  const { params } = props
  const { slug, locale } = await params

  setRequestLocale(locale)

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(albumBySlugFromLastFmQueryOptions(slug))

  const album = queryClient.getQueryData(albumBySlugFromLastFmQueryOptions(slug).queryKey)

  if (!album) {
    notFound()
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AlbumDetailModule album={album} />
    </HydrationBoundary>
  )
}

