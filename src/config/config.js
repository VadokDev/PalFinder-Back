const dotenv = require("dotenv");
const envFound = dotenv.config();

module.exports = {
  port: parseInt(process.env.PORT, 10) || 80,
  mongoUrl: process.env.MONGO_URL || 'mongodb://palfinder-bd.herokuapp.com:27017/promotions',
};
