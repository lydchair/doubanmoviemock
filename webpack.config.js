var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname+'/build' ,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),  
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: process.env.PORT || 8082,
    disableHostCheck: true,

    proxy:{
        "/api": {
            target: "http://api.douban.com/v2/",
            pathRewrite: {"^/api" : ""},
            changeOrigin: true
        }
    }
  },
  devtool: 'source-map',
  resolve: {
      modules: [
          path.join(__dirname, "app"),
          "node_modules"
      ],
     extensions: ['.js', '.json', '.css', '.scss']
  },
  module: {
    loaders: [
       {test:/\.css$/, loader: 'style-loader!css-loader'},
       {
           test: /\.html?$/,
           loader: 'html-loader',
       },
       {test:/\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url-loader?limit=8192'},
       {test:/\.js$/, loader: 'react-hot-loader!babel-loader', exclude: /node_modules/},
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      
      template: __dirname + "/index.html"
  }),
  new webpack.HotModuleReplacementPlugin()
  ]
};
