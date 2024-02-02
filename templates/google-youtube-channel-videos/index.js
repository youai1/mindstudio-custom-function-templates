async function getYouTubeChannelVideoDetails(videoIds, apiKey) {
  const url = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds.join(',')}&part=snippet,contentDetails,statistics,status`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items.map(item => ({
      title: item.snippet.title,
      videoId: item.id,
      publishedAt: item.snippet.publishedAt,
      duration: item.contentDetails.duration,
      viewCount: item.statistics.viewCount,
      likeCount: item.statistics.likeCount,
      status: item.status.privacyStatus
    }));
  } catch (error) {
    console.error("Error fetching YouTube video details:", error);
    return null;
  }
}

async function getYouTubeChannelVideos(channelId, apiKey) {
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${200}`;

  try {
    const response = await fetch(searchUrl);
    const searchData = await response.json();
    const videoIds = searchData.items.map(item => item.id.videoId);
    return await getYouTubeChannelVideoDetails(videoIds, apiKey);
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return null;
  }
}


// ==== Config variables
const apiKey = ai.getConfig('apiKey');
const channelId = ai.getConfig('channelId');
const outputVar = ai.getConfig('outputVar') || 'output';
// ====

if (!apiKey) {
  const errorMessage = 'ERROR: No API key provided.';
  ai.crmLog(errorMessage);
  ai.vars[outputVar] = errorMessage;
}

ai.log("Fetching videos...");

let data = await getYouTubeChannelVideos(channelId, apiKey);

if (!data) {
  const errorMessage = 'ERROR: Videos not found.';
  console.error(errorMessage);
  ai.vars[outputVar] = errorMessage;
  return;
}

const stringifiedResponse = JSON.stringify(data);

ai.vars[outputVar] = stringifiedResponse;
ai.crmLog(`GET request result: ${stringifiedResponse}`);
