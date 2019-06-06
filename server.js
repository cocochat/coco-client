////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Note: Because of how next starts webpack, changes to this file do not trigger recompiling.
// You must manually restart the server when making changes to this file.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const next = require("next");
const proxy = require("http-proxy-middleware");
// proxy('http://localhost:3000');
// const devProxy = {
//   "/api": {
//     target: "http://localhost:3000",
//   }
// };
const port = parseInt(process.env.PORT, 10) || 7777;
const dev = process.env.NODE_ENV !== "production";
const env = process.env.NODE_ENV;
// const routes = require("./routes");
const app = next({ dev });
const handle = app.getRequestHandler();



let server;
app
  .prepare()
  .then(() => {
    server = express();
    server.use('/api', proxy({ target: 'http://localhost:3000/'}));
    // Set up the proxy.
    // if (devProxy) {
    //   const proxyMiddleware = require("http-proxy-middleware");
    //   Object.keys(devProxy).forEach(function(context) {
    //     server.use(proxyMiddleware(context, devProxy[context]));
    //   });
    // }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all("*", (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch(err => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
  });
