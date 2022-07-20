import { axiosPublic } from "../api/interseptors"
import { getMoviesUrl } from "../constant/serverPath"
import { IMovie } from "../types/movies/movie.types"

export const MovieService = {
  async getAll(searchItem?: string): Promise<IMovie[]> {
    const response = await axiosPublic.get<IMovie[]>(getMoviesUrl(''), {
      params: {
        title_like: searchItem ? searchItem : ''
      }
    })

    return response.data
  }
}