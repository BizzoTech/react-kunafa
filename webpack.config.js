const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');


const path = require('path');

if (!debug) {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }));
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    library: 'reactKunafa',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: debug
      ? 'js/react-kunafa.bundle.js'
      : 'js/react-kunafa.bundle.min.js'
  },
  // externals: {
  //   "i18n-js": "i18n-js",
  //   react: "react",
  //   "react-dom": "react-dom",
  //   redux: "redux",
  //   "react-redux": "react-redux",
  //   "kunafa-client": "kunafa-client",
  //   'react-dom/server': 'react-dom/server',
  //   'pouchdb': 'pouchdb'
  // },
  externals: function(context, request, callback) {
    // Absolute & Relative paths are not externals
    if (request.match(/^(\.{0,2})\//)) {
      return callback();
    }

    try {
      // Attempt to resolve the module via Node
      require.resolve(request);
      callback(null, request);
    } catch(e) {
      // Node couldn't find it, so it must be user-aliased
      callback();
    }
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
