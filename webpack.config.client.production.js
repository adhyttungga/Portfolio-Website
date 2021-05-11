const path = require('path')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "prdouction",
    entry: [path.join(CURRENT_WORKING_DIR, 'client/main.js')],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js',
        publickPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}

module.exports = config