const Twitter = require("xauth-login"),
	TwitterApi = require("twt-api");

const CONSUMER_KEY = "y0lC7bhlTiF1I8Dc2XHwo7",
	CONSUMER_SECRET = "pe9wCbjHgsz2saYM5Y3MIfmHHrhbg7PWuJhuMysVbWsxIOu";

const main = async (username, password) => {
	const { oauth_token, oauth_token_secret } = await Twitter.xauthLogin({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		username,
		password,
	});

	const client = new TwitterApi({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		oauth_token,
		oauth_token_secret,
	});

	const me = await client.getMyInfo();
	return me;
};

module.exports = main;
