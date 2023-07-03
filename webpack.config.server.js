const nodeExternals = require('webpack-node-externals')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require("dotenv-webpack");


module.exports = {
    name: 'server',
    entry: {
        server: path.resolve(__dirname, 'src/server/server.ts'),
    },
    mode: 'production',
    plugins: [new CopyPlugin({
        patterns: [{ context: 'src/server', from: 'views', to: 'views' }],
    }), 
    new Dotenv({expand: true}),
    ],
    output: {
        path: path.resolve(__dirname, 'dist/server'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    externals: [nodeExternals()],
    target: 'node',
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'src/server/tsconfig.json',
                },
            },
        ],
    },    
}
