<template>
  <b-container v-if="article">
    <h1 class="mt-4">{{ article.title }}</h1>
    <pre><code>{{article}}</code></pre>
    <b-button variant="success" @click="handleAccept()">Accept</b-button>
    <b-button variant="danger" @click="handleReject()">Reject</b-button>
  </b-container>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      article: null,
    };
  },
  computed: {
    articleId: {
      get() {
        return parseInt(this.$route.params.id);
      },
    },
  },
  methods: {
    async handleAccept() {
      try {
        await this.$store.dispatch("article/accept", {
          article_id: this.articleId,
        });
      } catch (err) {
        console.log(err);
      } finally {
      }
    },
    async handleReject() {
      try {
        await this.$store.dispatch("article/reject", {
          article_id: this.articleId,
        });
      } catch (err) {
        console.log(err);
      } finally {
      }
    },
  },
  apollo: {
    $subscribe: {
      article: {
        query: gql`
          subscription ($article_id: Int!) {
            articles_by_pk(id: $article_id) {
              id
              status
              title
            }
          }
        `,
        variables() {
          return {
            article_id: this.articleId,
          };
        },
        result({ data }) {
          this.article = data.articles_by_pk;
        },
      },
    },
  },
};
</script>