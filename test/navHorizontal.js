import NavHorizontal from '../src/js/components/navHorizontal';

const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('chai').expect;

const $ = require('./fixtures/navHorizontal');

describe('NavHorizontal', () => {
  it('should navHorizontal exists', () => {
    new NavHorizontal($('.nav-horizontal')[0]);

    expect($('.nav-horizontal').length).equal(1);
  })
});