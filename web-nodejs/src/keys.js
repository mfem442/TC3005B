module.exports = {
  database: {
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'itesm',
      database: process.env.MYSQL_DATABASE || 'test_db'
  }
}