import { axiosPublic } from "../api/interseptors"
import { getUsersUrl } from "../constant/serverPath"
import { IUser } from "../types/user.types"

export const UserService = {
  async getAll(searchItem?: string): Promise<IUser[]> {
    const response = await axiosPublic.get<IUser[]>(getUsersUrl(''), {
      params: {
        email_like: searchItem ? searchItem : ''
      }
    })

    return response.data
  }
}