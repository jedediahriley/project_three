// code adapted from https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example#projectstructure


import { authHeader, handleResponse } from "../utils"

let baseURL = ""

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003"
} else {
  baseURL = ""
}

export const userService = {
    getAll,
    getById
}

function getAll() {
    const requestOptions = { method: "GET", headers: authHeader() }
    return fetch(baseURL + "/user", requestOptions)
        .then(handleResponse)
}

function getById(id) {
    const requestOptions = { method: "GET", headers: authHeader() }
    return fetch(baseURL + "/user/" + id, requestOptions)
        .then(handleResponse)
}