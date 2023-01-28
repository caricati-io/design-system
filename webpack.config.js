const ts = require('typescript');
const ReactDocgenTypescriptPlugin = require("react-docgen-typescript-plugin").default;


module.exports = {
  test: /\.(sass|less|css)$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader'],
  plugins: [
    new ReactDocgenTypescriptPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
