const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')


router.get('/:healthId', userController.getUser)

router.post('/', userController.createUser)

router.put('/:healthId', userController.updateUser);

router.delete('/:healthId', userController.deleteUser);

module.exports = router