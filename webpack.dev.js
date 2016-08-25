var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx", ".css", ".eot", "png", ".woff", ".woff2", ".ttf", ".svg"]
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        exclude: /node_modules/,
        include: [
          path.join(__dirname, "src")
        ],
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
      { test: /\.png$/, loader: "url?limit=10000" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ]
  }
};
