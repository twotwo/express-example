const debug = require("debug")("init:database")
debug.enabled = true

// debug("NODE_ENV = %s", process.env.NODE_ENV)
process.env.NODE_ENV = "production"

debug("pls set db config in shell...")
debug(
  "export DATABASE_URL=mysql://node:pD%235T%7el14%2b%2ci@106.75.19.156:3306/test"
)

debug("DEBUG=init:*,sql,sync node init-db.js")

const models = require("./models")
// log to debug
models.sequelize.options.logging = require("debug")("sql")

// sync() will create all table if they doesn't exist in database
models.sequelize
  .sync({ force: false, logging: require("debug")("sync") })
  .then(() => {
    debug("create table...")
    models.User.create({ username: "tester", password: "ilovetest" })
      .then(() => {
        debug("add users...")
      })
      .catch(ex => debug("Insert Failed: %s", ex.message))
  })
  .catch(ex => {
    debug("sync failed @%O", ex)
  })

// debug("db config = %O", models.sequelize.config)
// debug("db options = %O", models.sequelize.options)
