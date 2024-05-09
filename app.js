"use strict";
//expressを使うためのコード
const express = require('express');
const app = express();
//mariaDBを操作するutil
const DBUtil = require('./utils/DBUtil');
//publicフォルダーにアクセス
//cssやimgなどを置く場所
app.use(express.static('public'));
//記述することによりexpressアプリがurlエンコードされたデータを適切に解析できるようになる。
app.use(express.urlencoded({ extended: false }));
app.get('/index', (req, res) => {
    res.render('index');
});
//サーバーを起動するコード
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
