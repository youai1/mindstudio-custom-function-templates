const sourceId = ai.getConfig('sourceId');
const id = ai.getConfig('id');

const url = `https://morning-star.p.rapidapi.com/news/get-details?sourceId=${sourceId}&id=${id}`;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'API_KEY',
        'X-RapidAPI-Host': 'morning-star.p.rapidapi.com'
    }
};


const response = await fetch(url, options);
const result = await response.json(); // Parse the response as JSON

let concatenatedContent = '';
result.body.forEach(item => {
    if (item.type === 'p') {
        item.contentObject.forEach(contentItem => {
            if (contentItem.type === 'text') {
                concatenatedContent += contentItem.content + ' ';
            }
        });
    }
});
ai.vars[ai.config.outputVar] = concatenatedContent.trim()
