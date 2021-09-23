import Vue from 'vue'
import _ from 'lodash'
import gql from 'graphql-tag'

const getDefaultState = () => {
  return {
  }
}

export const state = getDefaultState

export const getters = {
}

export const mutations = {
  resetState(state) {
    Object.assign(state, getDefaultState())
  }
}

export const actions = {

  async accept({ state, dispatch }, { article_id }) {
    const client = this.app.apolloProvider.clients.defaultClient
    const article = await client
      .mutate({
        mutation: gql`
                    mutation articleAccept($article_id: Int!) {
                        articleAccept(id: $article_id)
                    }
                `,
        variables: {
          article_id
        }
      })
      .then((data) => {
        return data.data
      })
    return article
  },

  async reject({ state, dispatch }, { article_id }) {
    const client = this.app.apolloProvider.clients.defaultClient
    const article = await client
      .mutate({
        mutation: gql`
                    mutation articleReject($article_id: Int!) {
                        articleReject(id: $article_id)
                    }
                `,
        variables: {
          article_id
        }
      })
      .then((data) => {
        return data.data
      })
    return article
  }

}
