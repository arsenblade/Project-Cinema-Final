import { FC } from 'react'
import Menu from '../Menu'
import { usePopularGenre } from './usePopularGenre'

const GenreMenu:FC = () => {
  const {data, isLoading} = usePopularGenre()

  return (
    isLoading ?
    <div>Loading...</div>
    : <Menu menu={{items: data || [], title: 'Popular Genre'}} />
  )
}

export default GenreMenu