

const ROLES = {
    "USER": "USER",
    "ADMIN": "ADMIN"
}

const inRole = (...roles) => (req, res, next) => {
    // console.log(req.user);
    const role = roles.find(role => req.user.Role == role)
    if (!role) {
        return res.status(403).json({ msg: "no access to this ressource" })
    }
    next()
}

module.exports = {
    inRole,
    ROLES
}