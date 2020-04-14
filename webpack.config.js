const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index",
    output: {
        filename: "index.js" 
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    resolve: {
        extensions: [".ts", ".js"]
    }
}
