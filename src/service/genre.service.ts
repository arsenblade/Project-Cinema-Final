import { axiosPrivate, axiosPublic } from "../api/interseptors"
import { getGenresUrl } from "../constant/serverPath"
import { IGenre } from "../types/movies/movie.types"
const uuid = require("uuid");


export const GenreService = {
  async getAll(searchItem?: string): Promise<IGenre[]> {
    const response = await axiosPublic.get<IGenre[]>(getGenresUrl(''), {
      params: {
        name_like: searchItem ? searchItem : ''
      }
    })

    return response.data
  },

  async delete(id: string) {
    const response = await axiosPrivate.delete(getGenresUrl(id))
    return response
  },

  async create() {
    const defaultGenre = {
      id: uuid.v4(),
      name: '',
      slug: "",
      description: "",
      icon: "MdHiking",
      createdAt: Date.now(),
      updatedAt: Date.now()
    }

    await axiosPrivate.post<IGenre>(getGenresUrl(''), defaultGenre)

    return defaultGenre.id
  },

  async getById(id: string) {
    return await axiosPrivate.get<IGenre>(getGenresUrl(id))
  },

  async update(id: string, data: IGenre) {
    return await axiosPrivate.put<IGenre>(getGenresUrl(id), data)
  }
}