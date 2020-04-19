import http from '../Service/httpservice'
import config from '../../src/config.json'

export function createPost(post) {
    return http.post(config.api_post, post)
}
export function getPosts() {
    return http.get(config.api_getPosts)
}
export function createUser(user) {
    return http.post(config.api_users, user)
}
export function getUsers() {
    return http.get(config.api_getUsers)
}
export function getCategory() {
    return http.get(config.api_getCategory)
}