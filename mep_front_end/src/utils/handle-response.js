// code taken directly from https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example#projectstructure

import { authenticationService } from "../services/authentication.service.js"

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                authenticationService.logout()
                window.location.reload(true)
            }

            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }

        return data
    })
}