const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/terserMain.js",

  mode: "production",
  // devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name]-bundle.js",
    //动态导入时，分出来的小包命名方式
    chunkFilename: "[name]_chunk.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx"],
  },
  devServer: {
    static: ["content"],
  },
  optimization: {
    chunkIds: "natural",
    splitChunks: {
      chunks: "all",
      // maxSize: 102400,
      minSize: 1,
      cacheGroups: {
        diyutils: {
          test: /utils/,
          filename: "[name]_utils.js",
        },
        diyvendors: {
          test: /node_modules/,
          filename: "[name]_vendor.js",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
