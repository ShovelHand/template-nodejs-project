const path = require('path');
module.exports = {
    devtool: 'inline-source-map',
    entry: "./web/app.tsx",
    mode: "development",
    output: {
        filename: "./app-bundle.js",
    },

    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader'
                }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          exclude: /\.module\.css$/,
        }
        ]
    }
}