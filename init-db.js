const debug = require("debug")("init:database")
debug.enabled = true

// debug("NODE_ENV = %s", process.env.NODE_ENV)

process.env.NODE_ENV = "production"
debug("pls set db config in shell...")
debug(
  "export DATABASE_URL=mysql://node:pD%235T%7el14%2b%2ci@106.75.19.156:3306/test"
)

const models = require("./models")

// sync() will create all table if they doesn't exist in database
models.sequelize
  .sync()
  .then(() => {
    debug("create table...")
  })
  .catch(ex => {
    debug("sync failed @%O", ex)
  })

debug("db config = %O", models.sequelize.config)