import Cookies from "js-cookie"
import { IUser } from "../../types/user.types"

export const saveTokenStorage = (token: string, user: IUser) => {
  Cookies.set('accessToken', token)
  console.log(user)
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeTokenStorage = () => {
  Cookies.remove('accessToken')
}