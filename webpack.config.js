const path = require('path');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let config = {
  entry: './src/index.js',
  devServer: {
    port: 8000,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './dist'
  },
  plugins:[
    new CleanWebpackPlugin('dist'),
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title:"turntable",
      meta: {viewport: 'width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no'}
    }),
    new Webpack.ProvidePlugin({
      //THREE:"three",
      //Preload:"./components/game/preload",
      //createjs:"latest-createjs"
    })
  ],
  module:{	
    rules:[
      {
        test:/\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'res/images/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              }
            }
          }
        ]
      },
      {
        test: /\.(wav|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'sounds/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'res/fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(fbx|aeo|obj)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'models/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

if(process.argv[3] == 'development'){
  
}else if(process.argv[3] == 'production'){
  let u = new UglifyJsPlugin();
  config.plugins.push(u);
}
module.exports = config;
