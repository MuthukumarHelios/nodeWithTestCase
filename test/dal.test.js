

var dal = require("../dal/dal")
var assert = require("assert")


describe("findBatches",  async () => {
  it("should return batches", async() => {
   batches = await dal.findBatch()
   assert.notEqual(1, batches)
  })    
})