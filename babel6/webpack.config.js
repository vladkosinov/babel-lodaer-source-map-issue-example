module.exports = {
    devtool: 'source-map',
    entry: {
        app: './src/index'
    },
    output: {
        filename: 'public/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            }
        ]
    }
};