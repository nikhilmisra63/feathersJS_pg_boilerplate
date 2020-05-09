const techdenDefault = require('./pg-default/pg-default.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(techdenDefault);
};
