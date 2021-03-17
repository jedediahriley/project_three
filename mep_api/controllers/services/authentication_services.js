const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        next ()
    }else {
        console.log("unauthenticated request")
        res.redirect("/sessions/new")
    }
}