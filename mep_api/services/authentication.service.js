function userAuthentication (url, requestOptions) {
    const authHeader = requestOptions["Authorization"]
    const isLoggedIn = authHeader && authHeader.startsWith("Bearer fake-jwt-token")
    const roleString = isLoggedIn && authHeader.split(".")[1]
    const userRole = roleString ? Role[roleString] : null

    return new Promise((resolve, reject) => {
        
    })


}