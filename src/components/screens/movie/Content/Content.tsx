
import { FC } from 'react'
import { getActorsUrl, getGenresUrl } from '../../../../constant/serverPath'
import { useAuth } from '../../../../hooks/useAuth'
import MaterialIcon from '../../../ui/MaterialIcon'
import { IContent } from './content.interface'
import styles from './Content.module.scss'
import ContentList from './ContentList/ContentList'

const Content:FC<IContent> = ({movie}) => {
  const {user} = useAuth()
  return (
    <div className={styles.content}>
      <h1>{movie.title}</h1>
      <div className={styles.details}>
        <span>{movie.parameters.year} · </span>
        <span>{movie.parameters.country} · </span>
        <span>{movie.parameters.duration} min.</span>
      </div>
      <ContentList links={movie.genres.slice(0, 3).map(g => ({
        id: g.id,
        link: getGenresUrl(g.slug),
        title: g.name,
      }))}  name='Genres'/>

      <ContentList links={movie.actors.slice(0, 3).map(a => ({
        id: a.id,
        link: getActorsUrl(a.slug),
        title: a.name,
      }))}  name='Actors'/>

      <div className={styles.rating}>
        <MaterialIcon name='MdStarRate' />
        <span>{movie.rating.toFixed(1)}</span>
      </div>
    </div>
  )
}

export default Content