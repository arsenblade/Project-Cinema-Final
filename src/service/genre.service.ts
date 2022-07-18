import { axiosPublic } from "../api/interseptors"
import { getGenresUrl } from "../constant/serverPath"
import { IGenre } from "../types/movies/movie.types"


export const GenreService = {
  async getAll() {
    const response = await axiosPublic.get<IGenre[]>(getGenresUrl(''))
    return response
  }
}