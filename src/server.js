const server = require('./app.js');
const config = require("./config/config.js");

server.listen(config.port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Express server listening at port", config.port);
});
