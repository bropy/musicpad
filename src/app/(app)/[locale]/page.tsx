import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { setRequestLocale } from 'next-intl/server'
import { type Locale } from 'next-intl'

import { getQueryClient, topAlbumsQueryOptions, commentsQueryOptions } from '@/pkg/libraries/rest-api'
import { HomeModule } from '@/app/modules/home'

// interface
interface IProps {
  params: Promise<{ locale: Locale }>
}

export const revalidate = 30 // 30 seconds (matching comments revalidation)

// component
export default async function Home(props: Readonly<IProps>) {
  const { params } = props
  const { locale } = await params

  setRequestLocale(locale)

  const queryClient = getQueryClient()
  
  // Prefetch data on server
  await Promise.all([
    queryClient.prefetchQuery(topAlbumsQueryOptions()),
    queryClient.prefetchQuery(commentsQueryOptions()),
  ])

  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  )
}
