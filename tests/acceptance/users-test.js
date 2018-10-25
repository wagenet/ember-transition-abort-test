import { visit, currentURL } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance: Users', function(hooks) {
  setupApplicationTest(hooks);

  test('goes to setup', async function(assert) {
    await visit('/users');
    assert.equal(currentURL(), '/setup');
  });
});
