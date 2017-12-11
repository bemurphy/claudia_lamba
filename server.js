var ApiBuilder = require('claudia-api-builder'),
    superb = require('superb'),
    api = new ApiBuilder();

module.exports = api;

api.get('/awesome', function(req) {
  return req.queryString.name + ' is ' + superb();
}, {apiKeyRequired: true});

api.get('/sad', function(req) {
  return req.queryString.name + ' wishes they were ' + superb();
}, {apiKeyRequired: true});
