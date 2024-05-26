const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|svg|png|jpg|jpeg)$/i,
				use: [
          'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    hot: true,
    contentBase: path.resolve("./dist"),
    compress: true,
    port: 8564,
  },
  performance: {
    maxAssetSize: 1000000,
  },
  devtool: 'inline-source-map',
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     name: "index.html",
  //     inject: false,
  //     template: "./dist/index.html",
  //   }),
  // ],
};