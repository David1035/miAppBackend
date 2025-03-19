const express = require('express');
const UserService = require('../services/user.service')

const router = express.Router();
const service = new UserService();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  const result = service.find(limit, offset)
  res.json(result)
})

module.exports = router;
