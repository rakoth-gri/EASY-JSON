import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";

const isDev = process.env.NODE_ENV === "development";
const target = isDev ? "web" : "browserslist";
const mode = isDev ? "development" : "production";

const BabelConfigObject = (preset) => {
  return {
    loader: "babel-loader",
    options: {
      presets: preset ? ["@babel/preset-env", preset] : ["@babel/preset-env"],
    },
  };
};

function Mimimiser() {
  return mode === "production"
    ? [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
        }),
      ]
    : [];
}

export default {
  target,
  mode,
  entry: {
    main: ["@babel/polyfill", path.resolve("src") + "/main.js"],
    docs: ["@babel/polyfill", path.resolve("src") + "/docs.js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve("dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  "postcss-preset-env": { browsers: "last 2 version" },
                },
              },
              sourceMap: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: BabelConfigObject(),
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: BabelConfigObject("@babel/preset-typescript"),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "icons/[name][ext]",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(path.resolve(), 'src'),
    },
    compress: true,
    port: 3013,
    allowedHosts: 'all',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("src") + "/index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("src") + "/docs.html",
      filename: "docs.html",
      minify: {
        collapseWhitespace: !isDev,
      },
      chunks: ["docs"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  optimization: {
    minimizer: Mimimiser(),
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".tsx", ".ts"],
  },
};
