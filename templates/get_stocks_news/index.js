const performanceID = ai.getConfig('performanceID');
const url = `https://morning-star.p.rapidapi.com/news/list?performanceId=${performanceID}`; // Template literal used here

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4bf753e5amsh66b7b07033cb646p1931d2jsn5f22292991c2',
		'X-RapidAPI-Host': 'morning-star.p.rapidapi.com'
	}
};


const response = await fetch(url, options);
const result = await response.text();
ai.vars[ai.config.outputVar] = result


