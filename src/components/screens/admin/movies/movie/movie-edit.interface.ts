import { IMovie } from "../../../../../types/movies/movie.types"


export interface IMovieEditInput
	extends Omit<IMovie, '_id' | 'rating' | 'countOpened' | 'genres' | 'actors'> {
	genres: string[]
	actors: string[]
}