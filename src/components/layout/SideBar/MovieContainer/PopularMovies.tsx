import { FC } from 'react'
import { useQuery } from 'react-query'
import { MovieService } from '../../../../service/movie.service'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import MoviesList from './MoviesList'
import styles from './PopularMovies.module.scss'

const PopularMovies:FC = () => {
  const {isLoading, data} = useQuery('Popular movies in sidebar', () => MovieService.getAll())
  const movies = data?.sort((firstMovie, secondMovie) => firstMovie.countOpened - secondMovie.countOpened).slice(0, 3)

  return (
    isLoading ? <div className={styles.loaderContainer}>
      <SkeletonLoader count={3} className={styles.loader} />
    </div>
    :
    <MoviesList link='/trending' movies={movies || []} title='Popular Movies' />
  )
}

export default PopularMovies