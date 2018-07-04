"use strict"

const debug = require("debug")("test:unit:models/index")

describe("models/index", () => {

  beforeEach(() => {
    this.models = require("../../models")
  })

  test("returns the task model", () => {
    // debug("Task = %O", this.models.Task)
    expect(this.models.Task).not.toBeNull()
  })

  test("returns the user model", () => {
    // debug("User = %O", this.models.User)
    expect(this.models.User).not.toBeNull()
  })
})
