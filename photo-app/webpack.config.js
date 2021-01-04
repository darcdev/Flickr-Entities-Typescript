module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
