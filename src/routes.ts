export interface RouteInterface {
  name: string
  route: string
}

export const HOME: RouteInterface = {
  name: 'contacts',
  route: '/',
}

export const LOGIN: RouteInterface = {
  name: 'sign in',
  route: '/login',
}

export const REGISTER: RouteInterface = {
  name: 'sign up',
  route: '/register',
}
