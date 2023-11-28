const url = 'https://morning-star.p.rapidapi.com/market/v2/get-movers';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'APIKEY',
		'X-RapidAPI-Host': 'morning-star.p.rapidapi.com'
	}
};

const response = await fetch(url, options);
const result = await response.text();
ai.vars[ai.config.outputVar] = result

