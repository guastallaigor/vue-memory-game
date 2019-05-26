import http from './http'

class UserService {
  constructor () {
    this.baseUrl = 'users'
  }

  getAll () {
    return http.get(this.baseUrl)
  }

  save (payload) {
    return http.post(this.baseUrl, payload)
  }
}

const userService = new UserService()
export default userService
