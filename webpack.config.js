const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "my-first-webpack.bundle.js",
  },
  devServer: {
    port: 4444,
    open: true,
  },
};
