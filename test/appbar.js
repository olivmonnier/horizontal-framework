import AppBar from '../src/js/components/appbar';
const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('chai').expect;

const $ = require('./fixtures/appbar');

describe('Appbar', () => {
  it('should appbar exists', () => {
    expect($('.appbar').length).equal(1)
  })
  it('should \'in\' className after click on toggle button', () => {
    new AppBar($('.appbar')[0])

    $('.appbar button').click()
    expect($('.appbar').hasClass('in')).equal(true)
  })
})