require("babel-core/register");
require("babel-polyfill");
const koa = require('koa');
const expect = require('expect')
const session = require('./src');

describe('Koa Mongo Connector', function(){
  it('should work', function(){
    expect(true).toBe(true);
  })
})