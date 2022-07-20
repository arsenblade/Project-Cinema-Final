import { routesPath } from "../constant/routesPath"
import Index from "../pages"
import Actors from "../pages/admin/actors"
import AdminIndexPage from "../pages/admin/adminIndexPage"
import Genres from "../pages/admin/genres"
import Movies from "../pages/admin/movies"
import Users from "../pages/admin/users"
import AuthPage from "../pages/auth"


export const publicRoutes = [
  {
    path: routesPath.MAIN_ROUTE,
    Component: Index
  },
  {
    path: routesPath.AUTH_ROUTE,
    Component: AuthPage
  }
]

export const authRoutes = []

export const adminRoutes = [
  {
    path: routesPath.ADMIN_INDEX,
    Component: AdminIndexPage
  },
  {
    path: routesPath.ADMIN_ACTORS,
    Component: Actors
  },
  {
    path: routesPath.ADMIN_GENRES,
    Component: Genres
  },
  {
    path: routesPath.ADMIN_MOVIES,
    Component: Movies
  },
  {
    path: routesPath.ADMIN_USERS,
    Component: Users
  },
]