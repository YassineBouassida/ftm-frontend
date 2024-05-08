import fetch from 'node-fetch';
import fs from 'fs';

import {
  getUID
} from '../functions/quizz'

export const actions = {
  async nuxtServerInit({
    commit,
    getters,
    dispatch
  }, {
    app
  }) {

    let quizz = app.$cookies.get('quizz');
    if (quizz) {
      let storeQuizz = await dispatch('calculator/fetchQuizzByUid', quizz.UID)
      if (storeQuizz?.data?.quizzResults) {
        app.$cookies.set('quizz', storeQuizz.data.quizzResults[0])

      }
    } else {
      const UID = getUID();


      let storeQuizz = await dispatch('calculator/createQuizz', UID)

      app.$cookies.set('quizz', storeQuizz)
    }

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
