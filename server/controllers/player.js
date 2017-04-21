const dbPlayer      = require('../models/player')
const passwordHash  = require('password-hash')
const jwt           = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  signUp: (req, res) => {
    req.body.password = passwordHash.generate(req.body.password)
    dbPlayer.create(req.body, (err, player) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(player)
      }
    })
  },
  signIn: (req, res) => {
    console.log(req.body);
    dbPlayer.findOne({username: req.body.username}, (err, player) => {
      if (err) {
        res.send(err.message)
      } else {
        let authorized = passwordHash.verify(req.body.password, player.password)
        if (authorized) {
          let token = jwt.sign({
            username: req.body.username
          }, process.env.SECRET_KEY)
          res.send(token)
        } else {
          res.send('You are not authorized, please try again')
        }
      }
    })
  },
  getAll: (req, res) => {
    dbPlayer.find({}, (err, player) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(player)
      }
    })
  },
  update: (req, res) => {
    dbPlayer.findByIdAndUpdate(req.params.id, req.body, (err, player) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(player)
      }
    })
  },
  delete: (req, res) => {
    dbPlayer.findByIdAndRemove(req.params.id, (err, player) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(player)
      }
    })
  }
}
