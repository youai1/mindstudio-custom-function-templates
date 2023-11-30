const performanceID = ai.getConfig('performanceID');
const url = `https://morning-star.p.rapidapi.com/news/list?performanceId=${performanceID}`; // Template literal used here
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
ai.vars[ai.config.outputVar] = result


