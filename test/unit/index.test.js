"use strict"

const debug = require("debug")("test:unit:models/index")

describe("models/index", () => {
  test("returns the task model", () => {
    const models = require("../../models")
    // debug("models.Task = %O", models.Task)
    expect(models.Task).not.toBeNull()
  })

  test("returns the user model", () => {
    const models = require("../../models")
    // debug("models.User = %O", models.User)
    expect(models.User).not.toBeNull()
  })
})
