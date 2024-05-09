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
async function connectToDatabase() {
	try {
		// データベースに接続します
		await sequelize.authenticate();
		console.log('MariaDBに正常に接続されました。');
	} catch (error) {
		console.error('MariaDBへの接続中にエラーが発生しました:', error);
	}
}

// connectToDatabase関数を呼び出してデータベースに接続します
connectToDatabase();