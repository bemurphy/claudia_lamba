var ApiBuilder = require('claudia-api-builder'),
    superb = require('superb'),
    api = new ApiBuilder();

module.exports = api;

var requireApiKey = false;

api.get('/awesome', function(req) {
  return req.queryString.name + ' is ' + superb();
}, {apiKeyRequired: requireApiKey});

api.get('/sad', function(req) {
  return req.queryString.name + ' wishes they were ' + superb();
}, {apiKeyRequired: requireApiKey});
