"use strict";

const getChannelURL = require('ember-source-channel-url');
const RSVP = require('rsvp');

module.exports = function() {
  return RSVP.hash({
    beta: getChannelURL('beta'),
    canary: getChannelURL('canary')
  }).then((urls) => {
    return {
      useYarn: true,

      scenarios: [
        {
          name: 'default'
        },
        // Not very useful, since we're generally on the latest
        {
          name: 'latest',
          npm: {
            devDependencies: {
              'ember-cli': 'latest',
              'ember-source': 'latest'
            }
          }
        },
        {
          name: 'beta',
          npm: {
            allowedToFail: true,
            devDependencies: {
              'ember-cli': 'beta',
              'ember-source': urls.beta
            }
          }
        },
        {
          name: 'canary',
          npm: {
            allowedToFail: true,
            devDependencies: {
              'ember-cli': 'ember-cli/ember-cli',
              'ember-source': urls.canary
            }
          }
        }
      ]
    };
  });
};
