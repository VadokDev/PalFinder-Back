const dotenv = require("dotenv");
const envFound = dotenv.config();

module.exports = {
  port: parseInt(process.env.PORT, 10) || 80,
  mongoUrl: process.env.MONGO_URL || 'mongodb://walmart-palfinder.herokuapp.com:27017/promotions',
};
