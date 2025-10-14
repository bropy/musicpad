import { type FC } from 'react'

// interface
interface IProps {
  slug: string
}

// component
const AlbumModule: FC<IProps> = (props) => {
  const { slug } = props

  return (
    <main className='min-h-screen bg-black'>
    </main>
  )
}

export default AlbumModule

