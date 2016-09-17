process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

const main = require('../../src/main');
const fixtures = require('../fixtures');

describe('integration', () => {
  describe('getDiff()', () => {
    it('should return a new array of objects', (done) => {
      main.getDiff(fixtures.oldList, fixtures.updatedList, (err, res) => {
        console.log(res);
        should.not.exist(err);
        res.length.should.eql(4);
        res[0].id.should.eql(1);
        res[0].type.should.eql('CHANGE');
        res[0].quantity.should.eql(8);
        res[1].id.should.eql(2);
        res[1].type.should.eql('REMOVED');
        res[2].id.should.eql(3);
        res[2].type.should.eql('CHANGE');
        res[2].name.should.eql('Peter');
        res[2].quantity.should.eql(99);
        res[3].id.should.eql(4);
        res[3].type.should.eql('ADD');
        res[3].name.should.eql('Ashley');
        res[3].quantity.should.eql(6);
        done();
      });
    });
    it('should return a new array of objects', (done) => {
      main.getDiff(fixtures.oldListTwo, fixtures.updatedListTwo, (err, res) => {
        should.not.exist(err);
        res.length.should.eql(3);
        res[0].id.should.eql(896344);
        res[0].type.should.eql('CHANGE');
        res[0].quantity.should.eql(10848);
        res[1].id.should.eql(25675436);
        res[1].type.should.eql('CHANGE');
        res[1].name.should.eql('Terrell');
        res[2].id.should.eql(83254);
        res[2].type.should.eql('ADD');
        res[2].name.should.eql('Javier');
        res[2].quantity.should.eql(60072);
        done();
      });
    });
    it('should return a new array of objects', (done) => {
      main.getDiff(
        fixtures.randomOldList, fixtures.randomUpdatedList, (err, res) => {
        should.not.exist(err);
        res.length.should.eql(6);
        res[0].type.should.eql('REMOVED');
        res[1].type.should.eql('REMOVED');
        res[2].type.should.eql('ADD');
        res[3].type.should.eql('ADD');
        res[4].type.should.eql('ADD');
        res[5].type.should.eql('ADD');
        done();
      });
    });
  });
});
