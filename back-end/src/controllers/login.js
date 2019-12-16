const jwt = require('jsonwebtoken')
const auth = require(`${__dirname}/../config/auth.js`)
module.exports.login = (req, res) => {
  const username = req.body.email
  const password = req.body.password
  // For the given username fetch user from DB
  const mockedUsername = 'admin@gmail.com'
  const mockedPassword = 'password'

  if (username && password) {
    if (username === mockedUsername && password === mockedPassword) {
      const token = jwt.sign({ username: username }, auth.jwtSecretKey, {
        expiresIn: '24h' // expires in 24 hours
      })
      // return the JWT token for the future API calls
      res.status(200).json({
        success: true,
        message: 'Authentication successful!',
        token: token
      })
    } else {
      res.status(403).json({
        success: false,
        message: 'Incorrect username or password'
      })
    }
  } else {
    res.status(400).json({
      success: false,
      message: 'Authentication failed! Please check the request'
    })
  }
}
