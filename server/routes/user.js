var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/:email', function (req, res) {
  var email = req.params.email

  db.getUser(email).then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

router.post('/', function (req, res) {
  var user = req.body
  db.saveUser(user).then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

router.put('/:id', function (req, res) {
  var id = req.params.id
  var user = req.body
  db.updateUser(id, user).then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
