const config = require("./config");
const axios = require("axios");

export const startProcess = async (
  processDefinitionKey: string,
  processBusinessKey: string,
  variables: any
) => {
  return (await axios({
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      variables: variables,
      businessKey: processBusinessKey,
    },
    url: `${config.CAMUNDA_REST_ENGINE}/process-definition/key/${processDefinitionKey}/start`,
  })).data;
};
