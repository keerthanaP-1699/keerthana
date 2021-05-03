const { SECRET } = process.env
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  
  if (req.cookies.Token) {

    const { Token } = req.cookies;
    try {
      const tokenVerificationResult = jwt.verify(Token, SECRET)
      req.user = tokenVerificationResult
      return next()
    } catch (err) {
      return res.unAuthorized('Token expired')
    }
  }
  res.unAuthorized('Token expired')
}
