//expressを使うためのコード
const express = require('express');

const app = express();

//publicフォルダーにアクセス
//cssやimgなどを置く場所
app.use(express.static('public'));

//記述することによりexpressアプリがurlエンコードされたデータを適切に解析できるようになる。
app.use(express.urlencoded({extended: false}));

app.get('/index', (req: any, res:any) =>{

});