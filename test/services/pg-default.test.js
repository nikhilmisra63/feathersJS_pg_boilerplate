const assert = require('assert');
const app = require('../../src/app');

describe('\'techden-default\' service', () => {
  it('registered the service', () => {
    const service = app.service('techden-default');

    assert.ok(service, 'Registered the service');
  });
});
