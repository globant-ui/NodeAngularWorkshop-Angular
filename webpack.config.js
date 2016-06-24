module.exports = {
    entry: ['core-js/shim', 'angular', './src/index.js'],
    // entry: './src/index.js',
    output: {
        path: 'tmp',
        filename: 'index.bundle.js'
    },
    module: {
        loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
        }]
    },
    cache: true,
    devtool: 'cheap-module-source-map',
    devServer: {
        filename: "index.bundle.js",
        contentBase: "./src",
        port: 3000,
        open: true,
        watch: true,
        publicPath: "/",
        historyApiFallback: true,
        stats: {
            colors: true,
            chunks: false
        },
    }
};
