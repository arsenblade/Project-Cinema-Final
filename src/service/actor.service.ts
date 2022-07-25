import { axiosPrivate, axiosPublic } from "../api/interseptors"
import { getActorsUrl } from "../constant/serverPath"
import { IActor } from "../types/movies/movie.types"
import { formatUrlUploads } from "../utils/formatUrlUploads";
const uuid = require("uuid");


export const ActorService = {
  async getAll(searchItem?: string): Promise<IActor[]> {
    const response = await axiosPublic.get<IActor[]>(getActorsUrl(''), {
      params: {
        name_like: searchItem ? searchItem : ''
      }
    })

    return response.data
  },

  async delete(id: string) {
    const response = await axiosPrivate.delete(getActorsUrl(id))
    return response
  },

  async create() {
    const defaultActor = {
      id: uuid.v4(),
      name: "",
      photo: "",
      slug: "",
      countMovies: 0,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }

    await axiosPrivate.post<IActor>(getActorsUrl(''), defaultActor)

    return defaultActor.id
  },

  async getById(id: string) {
    const response = await axiosPrivate.get<IActor>(getActorsUrl(id))

    response.data.photo = formatUrlUploads(response.data.photo)

    return response
  },

  async update(id: string, data: IActor) {
    data.photo = data && '/uploads/actors/' + data.photo + '.jpg'
    return await axiosPrivate.put<IActor>(getActorsUrl(id), data)
  }
}