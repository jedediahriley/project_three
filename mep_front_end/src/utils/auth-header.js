// code taken directly from https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example#projectstructure

import { authenticationService } from "../services/authentication.service"

export function authHeader() {
    const currentUser = authenticationService.currentUserValue
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}` }
    } else {
        return {}
    }
}
