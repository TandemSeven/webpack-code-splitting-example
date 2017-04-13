const path = require('path');

module.exports = {
  entry: {
    example: path.join(__dirname, 'example.js')
  },
  output: {
    path: __dirname,
    filename: 'out/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ]
      }
      ]
  }
  };