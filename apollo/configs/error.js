export default (graphqlError, {
  store,
  error,
  redirect,
  route
}) => {
  console.log('error', JSON.stringify(graphqlError, null, 2))

  const {
    networkError,
    message,
    gqlError,
    graphqlErrors
  } = graphqlError

  // handle error

  return error({
    statusCode: 503,
    message: graphqlError
  })
}
