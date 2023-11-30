const sourceId = ai.getConfig('sourceId');
const id = ai.getConfig('id');

const url = `https://morning-star.p.rapidapi.com/news/get-details?sourceId=${sourceId}&id=${id}`;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd4bf753e5amsh66b7b07033cb646p1931d2jsn5f22292991c2',
        'X-RapidAPI-Host': 'morning-star.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parse the response as JSON

    let concatenatedContent = '';
    for (let i = 0; i < result.body.length; i++) {
        const item = result.body[i];
        if (item.type === 'p') {
            for (let j = 0; j < item.contentObject.length; j++) {
                const contentItem = item.contentObject[j];
                if (contentItem.type === 'text') {
                    concatenatedContent += contentItem.content + ' ';
                }
            }
        }
    }

    ai.vars[ai.config.outputVar] = concatenatedContent.trim();
} catch (error) {
    console.error(`Error fetching data: ${error}`);
}
