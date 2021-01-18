const path = require("path")
module.exports = {
    entry : './src/main.js',//配置文件入口
    output:{
        path: path.resolve(__dirname, './dist'),//输出路径，__dirname当前文件所在路径
        filename : 'bundle.js'//输出文件
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }

    
}