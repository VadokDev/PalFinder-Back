const dotenv = require("dotenv");
const envFound = dotenv.config();

module.exports = {
  port: parseInt(process.env.PORT, 10),
  mongoUrl: process.env.MONGO_URL,
};
