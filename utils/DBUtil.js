"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Sequelize } = require('sequelize');
const config = require('../config/config.json'); //データベース接続設定情報
//環境に応じた設定を取得する（developmentを使用する
const env = process.env.NODE_ENV || 'development';
const envConfig = config[env];
const sequelize = new Sequelize(envConfig.database, envConfig.username, envConfig.password, {
    host: envConfig.host,
    dialect: envConfig.dialect,
    logging: false, // ログを表示したくない場合は、falseに設定します
});
// 非同期処理をasync/awaitで実行します
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // データベースに接続します
            yield sequelize.authenticate();
            console.log('MariaDBに正常に接続されました。');
        }
        catch (error) {
            console.error('MariaDBへの接続中にエラーが発生しました:', error);
        }
    });
}
// connectToDatabase関数を呼び出してデータベースに接続します
connectToDatabase();
