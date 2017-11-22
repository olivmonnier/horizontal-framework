const describe = require('mocha').describe,
  it = require('mocha').it,
  expect = require('chai').expect;

const $ = require('./fixtures/appbar');

describe('Appbar', () => {
  it('should appbar exists', () => {
    expect($('.appbar').length).equal(1)
  })
})