import http from '../Service/httpservice'
import config from '../../src/config.json'

//****************************************************************
//*************************Post***********************************
export function createPost(data) {
    return http.post(config.CreatePost, data)
}
export function getPosts() {
    return http.post(config.api_getPosts)
}
export function deletePost(id) {
    return http.delete(config.api_DeletePost + "/" + id)
}
export function updatePost(data) {
    const body = { ...data }
    delete body.id
    return http.post(`${config.api_editPost}/${data.id}`, body)

}
//****************************************************************
//*************************Users***********************************
export function createUser(data) {
    return http.post(config.api_CreateUser, data)
}
export function getUser() {
    return http.post(config.api_getUsers)
}
export function deleteUser(id) {
    return http.delete(config.api_DeleteUsers + "/" + id)
}
export function updateUser(data) {
    const body = { ...data }
    delete body.id
    return http.post(`${config.api_editUser}/${data.id}`, body)
}

export function getCategory() {
    return http.post(config.api_getCategory)
}
