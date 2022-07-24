import { routesPath } from "../constant/routesPath"
import Index from "../pages"
import Page404 from "../pages/404"
import AdminActorsPage from "../pages/admin/actors/actors"
import ActorsItemPage from "../pages/admin/actors/actorsItem"
import AdminIndexPage from "../pages/admin/adminIndexPage"
import AdminGenresPage from "../pages/admin/genres/genres"
import GenresItemPage from "../pages/admin/genres/genresItem"
import AdminMoviesPage from "../pages/admin/movies/movies"
import MoviesItemPage from "../pages/admin/movies/moviesItem"
import AdminUsersPage from "../pages/admin/users/users"
import UsersItemPage from "../pages/admin/users/usersItem"

import AuthPage from "../pages/auth"
import ProfilePage from "../pages/profile"


export const publicRoutes = [
  {
    path: routesPath.MAIN_ROUTE,
    Component: Index
  },
  {
    path: routesPath.AUTH_ROUTE,
    Component: AuthPage
  },
  {
    path: routesPath.ERROR_404,
    Component: Page404
  },
]

export const authRoutes = [
  {
    path: routesPath.PROFILE_ROUTE,
    Component: ProfilePage
  },
]

export const adminRoutes = [
  {
    path: routesPath.ADMIN_INDEX,
    Component: AdminIndexPage
  },
  {
    path: routesPath.ADMIN_ACTORS,
    Component: AdminActorsPage
  },
  {
    path: routesPath.ADMIN_GENRES,
    Component: AdminGenresPage
  },
  {
    path: routesPath.ADMIN_MOVIES,
    Component: AdminMoviesPage
  },
  {
    path: routesPath.ADMIN_USERS,
    Component: AdminUsersPage
  },
  {
    path: routesPath.ADMIN_ACTORS_ITEM,
    Component: ActorsItemPage
  },
  {
    path: routesPath.ADMIN_GENRES_ITEM,
    Component: GenresItemPage
  },
  {
    path: routesPath.ADMIN_MOVIES_ITEM,
    Component: MoviesItemPage
  },
  {
    path: routesPath.ADMIN_USERS_ITEM,
    Component: UsersItemPage
  },
  
]