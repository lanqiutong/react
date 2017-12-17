const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./www/app/main",
    output: {
        path: path.resolve(__dirname, "www/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "www/app")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules/")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["env" , "react"] ,
                    plugins: ["transform-object-rest-spread", "transform-runtime"]
                }
            },
            {
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, "www/app")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","less-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    watch : true
}