const region =  ai.getConfig('region');
const rapidapi =  ai.getConfig('rapidapi');
const baseUrl = `https://tokapi-mobile-version.p.rapidapi.com/v1/category?count=12&region=${region}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '${rapidapi}',
        'X-RapidAPI-Host': 'tokapi-mobile-version.p.rapidapi.com'
    }
};

let allResults = [];
let printedResults = [];

try {
    // Fetch and process data for each offset
    for (let offset of [0, 10, 20]) {
        const response = await fetch(`${baseUrl}&offset=${offset}`, options);
        const result = await response.json();
        allResults = allResults.concat(result.category_list);

        result.category_list.forEach(category => {
            if (category.category_type === 0 && category.challenge_info) {
                printedResults.push({
                    type: 'Challenge',
                    name: category.challenge_info.cha_name,
                    userCount: category.challenge_info.user_count,
                    viewCount: category.challenge_info.view_count,
                    description: category.challenge_info.desc
                });
            } else if (category.category_type === 1 && category.music_info) {
                printedResults.push({
                    type: 'Music',
                    name: category.music_info.title,
                    userCount: category.music_info.user_count
                });
            } else if (category.category_type === 3 && category.effect_info) {
                printedResults.push({
                    type: 'Effect',
                    name: category.effect_info.name,
                    userCount: category.effect_info.user_count
                });
            }
        });
    }

    // Save to ai.vars.responseData as a JSON string
    ai.vars.responseData = JSON.stringify({
        printedResults
    });
} catch (error) {
    console.error(error);
}
