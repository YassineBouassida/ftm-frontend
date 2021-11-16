import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';
import schema from '../configs/schema.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema
})

export default ({
  req,
  app
}) => {


  return {
    httpEndpoint: process.env.strapiBaseUri + '/graphql',

    cache: new InMemoryCache({
      fragmentMatcher
    }),
  }
}
