const express = require('express');
const UserService = require('../services/user.service');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users)
  } catch (error) {
    next(error)
  }
})

router.post('/',  async (req, res) => {
  try {
    const body = req.body;
    const  newProduct = await service.create(body);
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

module.exports = router;
