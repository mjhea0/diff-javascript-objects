process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

const main = require('../../src/main');
const fixtures = require('../fixtures');

describe('main', () => {

  describe('getDiff()', () => {
    it('should return a total', (done) => {
      main.getDiff(fixtures.oldList, fixtures.updatedList, (err, res) => {
        console.log(res);
      });
    });
  });

});
