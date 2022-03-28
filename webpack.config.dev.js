const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: ['./dist/containers/loader.js', './dist/components/loader.js'],
  output: {
    filename: 'main-' + process.env.npm_package_version + '.js',
    path: path.resolve(__dirname, 'bundle/dev')
  },
  plugins: [
    new Dotenv()
  ],
  watch: true
}