const path = require("path");
module.exports = {
  entry: "./src/main.js",
  mode: "development",
  // devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            // plugins: [
            //   "@babel/plugin-transform-arrow-functions",
            //   "@babel/plugin-transform-block-scoping",
            // ],
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
