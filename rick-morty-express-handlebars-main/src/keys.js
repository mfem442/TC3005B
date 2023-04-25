module.exports = {
    database: {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: process.env.SESSION_SECRET
    }
}