// モジュールの読み込みと、Expressの開始
const express = require('express');
const app = express();

// アクセス先
app.get('/', function (req,res){
    res.send('Hello World!');
});

// サーバの受付の開始
app.listen(3001);