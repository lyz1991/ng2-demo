module.exports= {
  entry: './app/main.js',
  output: {
    path: './build/',
    filename: '[name].js'
  },
  module: {
    loaders:[{
      test: /\.less$/,
      loader: 'style!css!less'
    },{
      test: /\.css$/,
      loader: 'style!css'
    }

    ]
  }

}

