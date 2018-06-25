const liveServer = require("live-server");

const params = {
    port: 8181,
    host: "0.0.0.0",
    root: "./base_starter",
    file: "index.html",
    open: false,
    wait: 1000,
    logLevel: 2,
    middleware: [function(req, res, next){next();}]
}

liveServer.start(params);