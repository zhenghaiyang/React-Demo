var webpack=require('webpack');  //必须 指定webpack。
var path=require("path"); //定义Node  path对象
var node_modules_dir = path.resolve(__dirname, 'node_modules'); //找到当前目录下的node_modules文件路径
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
// console.log(__dirname);
 //console.log(path.resolve('','index.js'));
var config={
  //入口文件位置
  entry:{
    bundle:[
      // 'webpack/hot/dev-server',
      // 'webpack-dev-server/client?http://localhost:9090',
      path.resolve(__dirname,'index.js')//当前文件夹目录下的index.js文件
    ]
  },
  //出口文件位置
  output:{
    path:path.resolve(__dirname,"build"),
    filename: "[name]-[hash].js",
    chunkFilename: "[id].bundle.js"
  },
  //插件配置
  plugins:[
    //new webpack.optimize.UglifyJsPlugin(), 压缩代码
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.OccurenceOrderPlugin(),  为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    // new webpack.optimize.ExtractTextPlugin({   //分类css和js
    //   filename: "css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]",
    //   disable: false,
		// 	allChunks: true
    // }),
    new webpack.optimize.UglifyJsPlugin({      //去掉注释 ，压缩js代码
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/build/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(), //webpack热加载插件
    new CleanWebpackPlugin(
       ['build/*.js'],　 //匹配删除的文件
       {
           root: __dirname,       　　　　　　　　　　//根目录
           verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
           dry:      false        　　　　　　　　　　//启用删除文件
       }
   )
  ],
  //模块加载
  module:{
    // preLoaders: [
    //   {
    //     test: /\.(js|jsx)$/,
    //     loader: 'eslint'
    //   }
    // ],
    loaders:[
      {
        test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        exclude: node_modules_dir,  //除外
        loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
      },
      {
        test: /\.(png|jpg)$/,
        exclude: node_modules_dir,
        loader: 'url?limit=125000'
      },
      {
        test: /\.css$/,
        // exclude: node_modules_dir,  //除外
        //loader: 'style!css?modules',  // 模块化css 但是 antd的无法使用
        loader: 'style!css',
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
    devServer: {
      colors: true,
      historyApiFallback: true,
      inline: true,
      hot: true,
      port: 8080
      progress: true
  }
};
module.exports = config;
