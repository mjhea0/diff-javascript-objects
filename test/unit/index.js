process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

const main = require('../../src/main');
const fixtures = require('../fixtures');

describe('unit', () => {
  describe('findUserById()', () => {
    it('should return an object if the id is part of the list', (done) => {
      const res = main.findUserById(1, fixtures.updatedList);
      res.id.should.eql(1);
      res.name.should.eql('Michael');
      res.quantity.should.eql(8);
      done();
    });
    it('should return false if the id is part not of the list', (done) => {
      const res = main.findUserById(22, fixtures.updatedList);
      res.should.eql(false);
      done();
    });
  });
  describe('getNewUsers()', () => {
    it('should return one object', (done) => {
      const res = main.getNewUsers(fixtures.oldList, fixtures.updatedList);
      res.length.should.eql(1);
      res[0].id.should.eql(4);
      res[0].name.should.eql('Ashley');
      res[0].quantity.should.eql(6);
      res[0].type.should.eql('ADD');
      done();
    });
    it('should return one object', (done) => {
      const res = main.getNewUsers(
        fixtures.oldListTwo, fixtures.updatedListTwo);
      res.length.should.eql(1);
      res[0].id.should.eql(83254);
      res[0].name.should.eql('Javier');
      res[0].quantity.should.eql(60072);
      res[0].type.should.eql('ADD');
      done();
    });
    it('should return two objects', (done) => {
      const res = main.getNewUsers(
        fixtures.oldListTwo, fixtures.updatedListThree);
      res.length.should.eql(2);
      res[0].id.should.eql(83254);
      res[0].name.should.eql('Javier');
      res[0].quantity.should.eql(60072);
      res[0].type.should.eql('ADD');
      res[1].id.should.eql(83253);
      res[1].name.should.eql('Zoe');
      res[1].quantity.should.eql(600);
      res[1].type.should.eql('ADD');
      done();
    });
    it('should return four objects', (done) => {
      const res = main.getNewUsers(
        fixtures.randomOldList, fixtures.randomUpdatedList);
      res.length.should.eql(4);
      done();
    });
  });
  describe('getListChanges()', () => {
    it('should return one object with changes', (done) => {
      const res = main.getListChanges(
        fixtures.oldList[0], fixtures.updatedList[0]);
      res.id.should.eql(1);
      res.quantity.should.eql(8);
      res.type.should.eql('CHANGE');
      done();
    });
  });
});
