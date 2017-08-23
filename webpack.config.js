var path = require('path')
var webpack = require('webpack')

module.exports = {
      devtool:'cheap-module-eval-source-map',
      entry:[
            'webpack-hot-middleware/client',//webpack-hot-middleware/client热加载，修改了代码之后，不需要重新启动服务器，就可以在页面上重新生效
            './index'
      ],
      output:{
            path:path.join(__dirname, 'dist'),
            filename:'bundle.js',
            publicPath:'/static/'
      },
      plugins:[
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin()
      ],
      module:{
            loaders:[
                  {
                        test:/\.js$/,
                        loaders:[ 'babel' ],
                        exclude:'/node_modules/',
                        include:__dirname
                  }
            ]
      }
}
