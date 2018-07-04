

var controller = require("../controlers/controler")
var sinon = require('sinon');

var chai = require('chai');
var expect = chai.expect;

var req,res, spy;
req = res = {};
spy = res.json = sinon.spy();

describe("findBatches",  async () => {
  it("should return response", async() => {
   await controller.findBatches(req, res)
    expect(spy.calledOnce).to.equal(true)
  })
  it("should return err", async() => {
    // expect(spy.).to.equal(true)
      
  })
})