"use strict"

const debug = require("debug")("test:unit:models/task")

describe("models/task", () => {
  beforeAll(() => {
    // Sync all models that aren't already in the database
    return require("../../models").sequelize.sync()
  })

  beforeEach(() => {
    this.User = require("../../models").User
    this.Task = require("../../models").Task
  })

  describe("create", () => {
    test("creates a task", () => {
      return this.User.create({ username: "johndoe" })
        .bind(this)
        .then(user => {
          debug("user = %O", user.dataValues)
          return this.Task.create({ title: "a title", UserId: user.id }).then(
            task => {
              debug("task = %O", task.dataValues)
              expect(task.title).toBe("a title")
            }
          )
        })
    })
  })
})
