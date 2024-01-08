const url = 'https://morning-star.p.rapidapi.com/market/v2/get-movers';
const rapidapi =  ai.getConfig('rapidapi');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${rapidapi}`,
		'X-RapidAPI-Host': 'morning-star.p.rapidapi.com'
	}
};

const response = await fetch(url, options);
const result = await response.text();
ai.vars[ai.config.movers] = result

