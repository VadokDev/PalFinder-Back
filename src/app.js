
const express = require("express");
const loaders = require("./loaders");
const config = require("./config/config.js");

async function start() {
  const app = express();

  await require("./loaders")({ expressApp: app });

  app.listen(config.port, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Express server listening at port", config.port);
  });

  return app;
}

start();
