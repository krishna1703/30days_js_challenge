const path = require('path');

module.exports = {
    entry: {
        main: './index.js',
  secondary: './index2.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
};
