const User = require('../models/user')

async function getUser(req, res, next) {
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({message: "user not found"})
        }
    } catch(err) {
        return res.status(500).json({message: err.message})
    }

    res.user = user
    next()
}

module.exports = getUser