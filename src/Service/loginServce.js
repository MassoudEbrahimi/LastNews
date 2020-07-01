import http from '../Service/httpservice'
import config from '../../src/config.json'


export function loginUser(username, password) {
    return http.post(config.api_getUsers, { username, password })
}
export function tokenAuth(username, password) {
    return http.post(config.api_getTokenAuth, { username, password })
}
