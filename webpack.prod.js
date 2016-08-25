var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devServer: {
    stats: "errors-only",
  },
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: process.env.PUBLIC_PATH || "/",
  },
  plugins: [
    new ExtractTextPlugin("styles.css", {allChunks: true}),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx", ".css", ".png"]
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
          path.join(__dirname, "src"),
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader"),
      },
      { test: /\.png$/, loader: "url?limit=10000" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};
