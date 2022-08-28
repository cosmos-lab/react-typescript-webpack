import { Configuration } from "webpack";
import "webpack-dev-server";

import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

const config = (env: any, argv: any): Configuration => {
  const isProd = argv.mode === "production";

  const configuration: Configuration = {
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
        ["@services"]: path.resolve(__dirname, "src/services/"),
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
      new ESLintPlugin({
        exclude: ["./node_modules/*"],
        extensions: ["ts", "tsx"],
      }),
    ],
  };

  if (isProd) {
    configuration.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    };
  }

  return configuration;
};

export default config;
