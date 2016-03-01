var path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'app/main.js'),
  output:{
    path:path.join(__dirname,"/build"),
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
            presets:['react']
      }
     }
    ]
  }
};
