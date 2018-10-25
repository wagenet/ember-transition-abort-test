import Route from '@ember/routing/route';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default Route.extend({

  async beforeModel() {
    await timeout(1000);
    this.replaceWith('setup');
  }

});
