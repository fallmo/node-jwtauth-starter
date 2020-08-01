const { route } = require('./auth');

const router = require('express').Router()
const verify = require('./verifyToken')

router.get('/', verify , (req, res) => {
    res.json(req.user)
})

module.exports = router;