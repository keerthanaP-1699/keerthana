const response = (req, res, next) => {
  const httpErrorGen = (errorCode) => (message) => res.status(404).send({ statusCode: errorCode, message })
  res.notFound = httpErrorGen(404)
  res.unAuthorized = httpErrorGen(401)
  res.internalError = httpErrorGen(500)
  res.setCookie = (token) => {
    res.status(200).send({ message: 'Authentication completed' })
  }
  next()
}

module.exports = response