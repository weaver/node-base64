var base64 = require('./lib/base64'),
    vows = require('vows'),
    assert = require('assert');

vows.describe('Base64').addBatch({
  'encoding binary': {
    topic: "\u008b\u00e7",

    'normal encoding': {
      topic: base64.encode64,
      'uses /+': expect('i+c=')
    },

    'urlsafe encoding': {
      topic: base64.urlsafe_encode64,
      'uses _-': expect('i-c=')
    }
  },

  'decoding': {
    topic: function() { return base64.decode64('i+c='); },
    'returns a string': expect("\u008b\u00e7")
  },

  'urlsafe decoding': {
    topic: function() { return base64.urlsafe_decode64('i-c='); },
    'returns a string': expect("\u008b\u00e7")
  }

}).export(module);

// Create a vow for synchronous literal data.
function expect(value) {
  return function(obj) {
    assert.equal(obj, value);
  };
}
