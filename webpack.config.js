import "webpack-dev-server";
import CopyWebpackPlugin from "copy-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path, { dirname } from "path";
import TerserPlugin from "terser-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = (env, argv) => {
  const isProd = argv.mode === "production";

  const configuration = {
    entry: "./src/index.tsx",
    devtool: isProd ? false : "source-map",
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: isProd ? "[chunkhash].js" : "[name].[chunkhash].js",
    },
    module: {
      rules: [
        {
          test: /\.(ts)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        ["@"]: path.resolve(__dirname, "src/"),
        ["@state"]: path.resolve(__dirname, "src/state/"),
        ["@services"]: path.resolve(__dirname, "src/services/"),
        ["@components"]: path.resolve(__dirname, "src/components/"),
        ["@views"]: path.resolve(__dirname, "src/views/"),
        ["@styles"]: path.resolve(__dirname, "src/styles/"),
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
        configType: "flat",
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
