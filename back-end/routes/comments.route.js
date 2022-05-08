const express = require('express')
const { Delete, add, getComment,getAllComments, update, like, dislike, removeByOwner } = require('../controllers/comments.controller')
const passport = require("passport")
const router = express.Router()
const { ROLES, inRole } = require('../security/RoleMiddleware')

router.post('/addComment/:idProject', passport.authenticate('jwt', { session: false }), add)
router.put('/update/:id', passport.authenticate('jwt', { session: false }), update)

// as a adminstrator i can delete comments 
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), inRole(ROLES.ADMIN), Delete)


router.get('/searchComment/:idComment', passport.authenticate('jwt', { session: false }), getComment)

router.get('/getAllComments', getAllComments)

router.post("/like/:idComment", passport.authenticate('jwt', { session: false }), like)
router.post("/dislike/:idComment", passport.authenticate('jwt', { session: false }), dislike)

router.delete("/removeByOwner/:idComment", passport.authenticate('jwt', { session: false }), removeByOwner)

module.exports = router