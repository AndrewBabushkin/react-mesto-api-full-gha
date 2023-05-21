require('dotenv').config();

const {
  NODE_ENV,
  PORT,
  JWT_SECRET,
  CONNECT,
} = process.env;

const config = {
  port: PORT || 3000,
  jwtSecret: NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
  connectDb: CONNECT,
};

module.exports = config;
