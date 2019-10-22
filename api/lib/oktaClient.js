const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-979948.okta.com',
  token: '00SOysd29NNZPI1W68iCB_rX3kdQMthObFdFGyzUSh'
});

module.exports = client;