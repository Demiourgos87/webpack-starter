var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

// ----- Output file paths
var outputDir = 'build/',
    cssOutput = 'css/master.css',
    jsOutput = 'js/master.js';

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: jsOutput
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['babel-preset-env'] }
                }
            },
            { test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ "css-loader?url=false", "postcss-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [ new ExtractTextPlugin(cssOutput) ]
};
