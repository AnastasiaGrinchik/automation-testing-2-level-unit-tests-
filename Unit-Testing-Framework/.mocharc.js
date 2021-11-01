const Mochawesome = require('mochawesome');

module.exports = {
    spec: 'test/specs/calculator/*.spec.js',
    // reporter: 'mochawesome',
    reporter: 'spec',
};
