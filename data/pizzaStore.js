const Sequelize = require('sequelize')

const database = 'pizza_lovers'
const host = 'pizza-db.czkhvitlmhua.us-west-2.rds.amazonaws.com'
const username = 'postgres'
const password = '.Lifangyi114'

const pgClient = new Sequelize(
    database,
    username,
    password,
    {
        host: host,
        dialect: 'postgres'
    }
)

const Pizza = pgClient.define('pizza', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    toppings: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    Created: {
        type: Sequelize.BIGINT
    }
})

Pizza.sync().then(() => {
    console.log('Postgres Connection Ready!')
})

module.exports = Pizza