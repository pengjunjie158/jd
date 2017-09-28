var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var json = require("./dataConfig.js");
module.exports={
    entry:__dirname+"/src/main.js",
    output:{
         path: __dirname + "/dist",
         filename: "[name].js"
        //  chunkFilename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.jpg|.png$/,
                use: ["url-loader"]
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ]
    },
    devServer:{
        host:"127.0.0.1",
        port:"9999",
        hot:true,
        setup(app){
            app.get("/fenlei",function(req,res){
              res.setHeader('Access-Control-Allow-Origion','*');
              res.setHeader('content-type','application/json;charset=utf-8');
                if(req.url==='/fenlei'){
                    res.json(json);
                }
            })
        }
    },
    resolve:{
        alias:{
            "vue":"vue/dist/vue.js"
        }
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:"index.html"
        })
    ]
}
