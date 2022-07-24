import { axiosPrivate, axiosPublic } from "../api/interseptors"
import { getUsersUrl } from "../constant/serverPath"
import { IUser } from "../types/user.types"
const uuid = require("uuid");

export const UserService = {
  async getAll(searchItem?: string): Promise<IUser[]> {
    const response = await axiosPublic.get<IUser[]>(getUsersUrl(''), {
      params: {
        email_like: searchItem ? searchItem : ''
      }
    })

    return response.data
  },

  async delete(id: string) {
    const response = await axiosPrivate.delete(getUsersUrl(id))
    return response
  },

  async getProfile(email: string) {
    const response = await axiosPrivate.get<IUser[]>(getUsersUrl(''))
    const user = response.data.find(currentUser => currentUser.email === email)
    return user 
  },

  async getById(id: string) {
    return await axiosPrivate.get<IUser>(getUsersUrl(id))
  },

  async update(id: string, dataField: IUser, data: IUser | null ) {
    if(data) {
      data.updatedAt = String(Date.now())
      data.email = dataField.email
      data.password = dataField.password
      data.isAdmin = dataField.isAdmin
    }

    console.log(data)
    return await axiosPrivate.put<IUser>(getUsersUrl(id), data)
  }
}