const knex= require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'vissBD'
    }
})

module.exports = knex