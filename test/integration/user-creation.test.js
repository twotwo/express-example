"use strict"

const app = require("../../app")
const Bluebird = require("bluebird")
const request = require("supertest")

const debug = require("debug")("test:integration")

describe("user creation page", () => {
  beforeAll(() => {
    // Sync all models that aren't already in the database
    return require("../../models").sequelize.sync()
  })

  beforeEach(() => {
    this.models = require("../../models")

    return Bluebird.all([
      this.models.Task.destroy({ truncate: true }),
      this.models.User.destroy({ truncate: true })
    ])
    // .then(results => {
    //   debug("beforeEach clean data")
    // })
    // .catch(console.error)
  })

  test("loads correctly", done => {
    request(app)
      .get("/")
      .expect(200, done)
  })

  test("lists a user if there is one", done => {
    debug("User = %O", this.models.User)
    this.models.User.create({ username: "johndoe" }).then(() => {
      request(app)
        .get("/")
        .expect(/johndoe/, done)
    })
  })

  test("lists the tickets for the user if available", done => {
    this.models.User.create({ username: "johndoe" })
      .bind(this)
      .then(function(user) {
        return this.models.Task.create({
          title: "johndoe task",
          UserId: user.id
        })
      })
      .then(() => {
        request(app)
          .get("/")
          .expect(/johndoe task/, done)
      })
  })
})
