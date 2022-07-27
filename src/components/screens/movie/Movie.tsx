import Banner from "../../ui/banner/Banner"
import Catalog from "../../ui/catalog-movies/Catalog"
import Gallery from "../../ui/gallery/Gallery"
import Content from "./Content/Content"
import styles from './Movie.module.scss'
import { useMovie } from "./useMovie"
import ReactPlayer from 'react-player'
import { useState } from "react"


const Movie = () => {
  const {dataMovie, isLoadingMovie, isLoadingMovies, similarMovies} = useMovie()
  const [isPlaying, setIsPlaying] =  useState(false)

  return (
      <>
        {dataMovie ? 
        <>
          <Banner image={dataMovie.bigPoster} Detail={() => <Content movie={dataMovie} />} />
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
}

export default Movie