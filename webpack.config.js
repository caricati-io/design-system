// const ts = require('typescript');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ReactDocgenTypescriptPlugin = require("react-docgen-typescript-plugin").default


module.exports = {
  test: /\.(sass|less|css)$/,
  loaders: ['css-loader'],
  plugins: [
    new ReactDocgenTypescriptPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
}
