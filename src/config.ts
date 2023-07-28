
const config = {
  port: 8081,
  sqlDB: {
    host: 'localhost',
    user: 'db_user',
    password: 'db_password',
    database: 'booksdb',
  },
  mongoDB: {
    url: 'mongodb://localhost:27017/myapp',
  },
};

export default config;
