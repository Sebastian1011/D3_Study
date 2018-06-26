const liveServer = require("live-server");

const params = {
    port: 8181,
    host: "0.0.0.0",
    file: "index.html",
    open: false,
    ignore: "node_modules",
    wait: 100,
    logLevel: 2,
    middleware: [function(req, res, next){next();}]
}

liveServer.start(params);