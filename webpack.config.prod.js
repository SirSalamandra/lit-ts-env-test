const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  entry: './dist/components/loader.js',
  output: {
    filename: 'main-' + process.env.npm_package_version + '.js',
    path: path.resolve(__dirname, 'bundle/prod')
  },
  plugins: [
    new Dotenv()
  ],
  watch: true
}