import { axiosPrivate, axiosPublic } from "../api/interseptors"
import { IMovieEditInput } from "../components/screens/admin/movies/movie/movie-edit.interface";
import { getMoviesUrl } from "../constant/serverPath"
import { IActor, IGenre, IMovie } from "../types/movies/movie.types"
const uuid = require("uuid");

export const MovieService = {
  async getAll(searchItem?: string): Promise<IMovie[]> {
    const response = await axiosPublic.get<IMovie[]>(getMoviesUrl(''), {
      params: {
        title_like: searchItem ? searchItem : ''
      }
    })

    return response.data
  },

  async delete(id: string) {
    const response = await axiosPrivate.delete(getMoviesUrl(id))
    return response
  },

  async create() {
    const defaultMovies = {
      id: uuid.v4(),
      poster: "",
      bigPoster: "",
      title: "",
      rating: 0,
      genres: [],
      countOpened: 0,
      videoUrl: "",
      actors: [],
      slug: "",
      isSendTelegram: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      parameters: {
        year: null,
        duration: null,
        country: ""
      }
    }

    return await axiosPrivate.post<IMovie>(getMoviesUrl(''), defaultMovies)
  },

  
  async update(id: string, dataField: IMovieEditInput, dataMovie: IMovie | null, dataGenres: IGenre[] | null, dataActors: IActor[] | null) {
    console.log(dataField)
    console.log(dataMovie)
    return await dataMovie
  },

  async getByIdClassic(id: string) {
    return await axiosPrivate.get<IMovie>(getMoviesUrl(id))
  },

  async getByIdMovieEditInput(id: string) {
    const {data} = await axiosPrivate.get<IMovie>(getMoviesUrl(id))
    const defaultMovies: IMovieEditInput = {
      poster: data.poster,
      bigPoster: data.bigPoster,
      title: data.title,
      genres: data.genres.map(genre => genre.id),
      videoUrl: data.videoUrl,
      actors: data.actors.map(actor => actor.id),
      slug: data.slug,
      parameters: {
        year: data.parameters.year,
        duration: data.parameters.duration,
        country: data.parameters.country
      },
      id: data.id,
      description: data.description
    }
    return defaultMovies
  },
}