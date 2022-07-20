
export enum routesPath {
  MAIN_ROUTE = '/',
  AUTH_ROUTE = '/auth',
  ADMIN_INDEX = '/manage',
  ADMIN_USERS = '/manage/users',
  ADMIN_MOVIES = '/manage/movies',
  ADMIN_ACTORS = '/manage/actors',
  ADMIN_GENRES = '/manage/genres',
}

export const getAdminHomeUrl = () => `/manage`
export const getAdminUrl = (string: string) => `/manage/${string}`