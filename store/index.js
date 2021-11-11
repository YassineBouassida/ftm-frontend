import Vuex from 'vuex';
import fetch from 'node-fetch';
import fs from 'fs';


const createStore = () => {
  console.log('create store');

  return new Vuex.Store({
    actions: {
      async nuxtServerInit({
        commit
      }, {
        app
      }) {
        console.log('create nuxtServerInit', process.env.NODE_ENV);

        // only update fragements locally
        if (process.env.NODE_ENV == 'development') {

          // LOAD FRAGMENT TYPES AND STORE IN FILE
          // APOLLO READS THIS FILE LATER
          fetch(process.env.strapiBaseUri + '/graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                variables: {},
                query: `
                            {
                                __schema {
                                    types {
                                        kind
                                        name
                                        possibleTypes {
                                            name
                                        }
                                    }
                                }
                            }
                        `,
              }),
            })
            .then(result => {
              result.json().then(result => {
                // here we're filtering out any type information unrelated to unions or interfaces
                const filteredData = result.data.__schema.types.filter(
                  type => type.possibleTypes !== null,
                );
                result.data.__schema.types = filteredData;
                fs.writeFile('./apollo/configs/schema.json', JSON.stringify(result.data), err => {
                  if (err) {
                    console.error('Error writing fragmentTypes file', err);
                  }
                });
              });

            })


        }

      },
    }
  });
};

export default createStore
