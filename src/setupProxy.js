const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");
module.exports = (app) => {
  const ROOT_PATH = {
    target: "https://api.igdb.com/v4",
    changeOrigin: true,
    logLevel: "debug",
  };
  const AUTH_PATH = {
    target: "https://id.twitch.tv",
    changeOrigin: true,
    logLevel: "debug",
  };
  app.use("/oauth2/*", createProxyMiddleware(AUTH_PATH));
  app.use("/games", createProxyMiddleware(ROOT_PATH));
  app.use(morgan("common"));
};
