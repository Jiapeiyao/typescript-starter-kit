const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rules = [
  {
    test: /\.ts(x)?$/,
    use: ["awesome-typescript-loader"],
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: "./postcss.config.js",
          },
        },
      },
    ],
    exclude: /\.module\.css$/,
  },
  {
    test: /\.css$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: true,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: "./postcss.config.js",
          },
        },
      },
    ],
    include: /\.module\.css$/,
  },
  {
    test: /\.less$/,
    use: ["style-loader", "css-loader", "less-loader"],
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: "url-loader",
  },
];

const config = {
  entry: ["react-hot-loader/patch", "./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, ".", "dist"),
    filename: "[name].[contenthash].js",
  },
  devServer: {
    contentBase: "./dist",
  },
  module: { rules: rules },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require("html-webpack-template"),
      inject: false,
      appMountId: "app",
      filename: "index.html",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = "[name].[hash].js";
  }

  
  if (argv.mode === 'production') {
    config.entry = ["./src/index.tsx"],
    config.output.filename = "bundle.js";
    config.resolve.alias = undefined;
    config.optimization = undefined;
  }

  return config;
};

