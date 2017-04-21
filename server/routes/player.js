const express           = require('express');
const router            = express.Router()
const playerController  = require('../controllers/player')


router.post('/signup', playerController.signUp)

router.post('/signin', playerController.signIn)

router.get('/', playerController.getAll)

router.put('/:id', playerController.update)

router.delete('/:id', playerController.delete)


module.exports = router;
