const jwt = require('jsonwebtoken');
require('dotenv').config()

let verify = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {
    if (decoded) {
      req.decoded = decoded
      next()
    } else {
      res.send('Unauthorized, to access this you need token')
    }
  })
}
