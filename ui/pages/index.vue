<template>
  <b-container>
    <h1 class="mt-4">template-fullstack-app</h1>
    <p class="lead">From zero to production in minutes. 🚀</p>
    <b-table striped hover :items="items">
      <template #cell(url)="data">
        <a :href="data.value" target="_blank">{{ data.value }}</a>
      </template>
    </b-table>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "UI", url: "http://localhost:3000", info: "" },
        { name: "API (Remote Schema)", url: "http://localhost:3001/v1/graphql", info: "" },
        {
          name: "Camunda (Cockpit)",
          url: "http://localhost:3002/camunda",
          info: "CREDENTAILS: demo:demo",
        },
        {
          name: "Camunda (REST)",
          url: "http://localhost:3002/engine-rest",
          info: "",
        },
        {
          name: "GraphQL (Engine)",
          url: "http://localhost:3003/v1/graphql",
          info: "x-hasura-admin-secret: 6fWMT-bY{Kq?Kn7v",
        },
        {
          name: "GraphQL (Console)",
          url: "http://localhost:3003/console",
          info: "ADMIN_SECRET: 6fWMT-bY{Kq?Kn7v",
        },
        { name: "Node-RED", url: "http://localhost:3004", info: "" },
      ],
    };
  },
};
</script>
