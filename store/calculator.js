import quizzResultsQuery from "~/apollo/queries/quizz/quizzResults";
import createQuizzResults from "~/apollo/mutations/quizz/createQuizzResults";
import updateQuizzResults from "~/apollo/mutations/quizz/updateQuizzResults";

export const state = () => ({
  quizz: {
    user: null,
    status: 'incompleted',
    results: [],
    stepsCompleted: 0,
    total: 0,
    quizzName: ''
  }
})
export const getters = {
  user(state) {
    return state.quizz.user
  },
  results(state) {
    return state.quizz.results
  },
  quizz(state) {
    return state.quizz
  }
}
export const mutations = {
  fillQuizzByParam(state, {
    paramName,
    value
  }) {
    state.quizz[paramName] = value
  },
  replaceQuizz(state, quizz) {
    state.quizz = quizz
  }

}

export const actions = {
  replaceByParam({
    commit
  }, {
    paramName,
    value
  }) {
    commit('fillQuizzByParam', {
      paramName,
      value
    })
  },
  updateQuizzResults({
    commit,
    getters
  }, payload) {
    const quizz = getters.quizz;
    console.log('quizz ', getters.quizz);

    const variables = {
      ...quizz,
      ...payload
    }
    console.log(variables);

    const clientApollo = this.app.apolloProvider.defaultClient;
    return new Promise((resolve, reject) => {
      clientApollo
        .mutate({
          mutation: updateQuizzResults,
          variables: variables

        }).then(resp => {
          console.log('result after update', resp);

          commit("replaceQuizz", resp.data.createQuizzResult.quizzResult);
          resolve(resp.data.createQuizzResult.quizzResult);
        })
        .catch(err => {
          console.log('catch after update', err);

          resolve(err);
        });
    });
  },
  createQuizz({
    commit
  }, UID) {

    const clientApollo = this.app.apolloProvider.defaultClient;
    return new Promise((resolve, reject) => {
      clientApollo
        .mutate({
          mutation: createQuizzResults,
          variables: {
            uid: UID,
            status: 'incompleted',
            results: [],
            stepsCompleted: 0,
            total: 0,
            quizzName: ''
          }

        }).then(resp => {
          commit("replaceQuizz", resp.data.createQuizzResult.quizzResult);
          resolve(resp.data.createQuizzResult.quizzResult);
        })
        .catch(err => {
          resolve(err);
        });
    });

  },
  fetchQuizzByUid({
    commit
  }, payload) {
    const clientApollo = this.app.apolloProvider.defaultClient;
    return new Promise((resolve, reject) => {
      clientApollo
        .query({
          query: quizzResultsQuery,
          variables: {
            id: payload
          }
        })
        .then(resp => {

          commit("replaceQuizz", resp.data.quizzResults[0]);
          resolve(resp);
        })
        .catch(err => {
          resolve(err);
        });
    });
  }

}
