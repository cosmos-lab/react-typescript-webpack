const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const config = (env, argv) => {
  return {
    entry: "./src/index.tsx",
    devtool: argv.mode === "production" ? false : "source-map",
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: argv.mode === "production" ? "[chunkhash].js" : "[name].[chunkhash].js",
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        ["@"]: path.resolve(__dirname, "src/"),
        ["@views"]: path.resolve(__dirname, "src/views/"),
      },
    },
    devServer: {
      static: path.join(__dirname, "build"),
      port: 4000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        chunks: ["main"],
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./public/static",
            to: "./static",
          },
          {
            from: "./public/robots.txt",
            to: "./robots.txt",
          },
          {
            from: "./public/manifest.json",
            to: "./manifest.json",
          },
        ],
      }),
    ],
    optimization:
      argv.mode === "production"
        ? {
            minimize: true,
            minimizer: [
              new TerserPlugin({
                extractComments: false,
              }),
            ],
          }
        : { minimize: false },
  };
};

module.exports = config;
