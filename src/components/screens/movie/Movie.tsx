import Banner from "../../ui/banner/Banner"
import Gallery from "../../ui/gallery/Gallery"
import Content from "./Content/Content"
import styles from './Movie.module.scss'
import { useMovie } from "./useMovie"
import ReactPlayer from 'react-player'
import { memo, useCallback, useState } from "react"


const Movie = memo(() => {
  const {dataMovie, isLoadingMovie, isLoadingMovies, similarMovies} = useMovie()
  const [isPlaying, setIsPlaying] =  useState(false)
  const detail = useCallback(() => <Content movie={dataMovie || null} />, [dataMovie])
  return (
      <>
        { !isLoadingMovies && dataMovie ? 
        <>
          <Banner image={dataMovie.bigPoster} Detail={detail} />
          <div className={styles.containerPlayer}>
            <ReactPlayer 
              style={{margin: '0 auto'}} 
              width={832} height={468} 
              url={dataMovie.videoUrl} 
              playing={isPlaying} 
              playIcon={<button className={styles.playButton} 
              onClick={() => setIsPlaying(true)}></button>} 
              light={dataMovie.bigPoster} 
              controls={true} 
              volume={0.5}/>
          </div>
          <div className={styles.similarContainer}>
            <h2 className={styles.heading}>Similar</h2>
            <Gallery items={similarMovies} />
          </div>
        </>
      : null}
      </>
  )
})

export default Movie