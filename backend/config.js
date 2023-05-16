require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
  connectDb: process.env.CONNECT,
};
// console.log(config);
module.exports = config;
