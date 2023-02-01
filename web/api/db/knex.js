const knex = require("knex")

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "ntpot.sqlite3"
    }
})


module.exports = connectedKnex;