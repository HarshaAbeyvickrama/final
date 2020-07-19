var clientId="231022246029-rd1p8o31a0e799i2l1gpugqvo6o4l6ic.apps.googleusercontent.com";
var apiKey="AIzaSyD_Ivx0_pKivCmsiZsseleSF9JymWkX5q0";

function authenticate() {
  return gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
      .then(function() { console.log("Sign-in successful with force ssl"); },
            function(err) { console.error("Error signing in", err); });
}
function loadClient() {
  gapi.client.setApiKey(apiKey);
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
  

function getSubscriptions() {
    var channelTitle = null;
    var channelID = null;
    var flag = 0;
    var itemArray = null;
    return gapi.client.youtube.subscriptions.list({
        "part": [
        "id",
        "snippet"
      ],
        "maxResults": 50,
        "mine": true
      })
      .then(function(response) {
          itemArray = response.result.items;
          for (let i = 0; i < itemArray.length; i++) {
            channelTitle = itemArray[i].snippet.title;
            channelID = itemArray[i].snippet.resourceId.channelId;
            console.log("Name", channelTitle);
            console.log("ID", channelID);
            //channelArray();
          }

          // Handle the results here (response.result has the parsed body).
        },
        function(err) { console.error("Execute error", err); });
}

//====================Get channel details by ID===============================================

function channelDetails(cId) {
  return gapi.client.youtube.channels.list({
    "part": [
      "snippet,contentDetails,statistics"
    ],
    "id": [
      cId
    ]
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              //console.log("Response", response);
              var t=response.result.items[0].id;
              var items=response.result.items[0];
              var url=items.snippet.customUrl;
              var id=items.id;
              var title=items.snippet.title;
              var description=items.snippet.description;
              var publishedAt=items.snippet.publishedAt;
              var thumbnail=items.snippet.thumbnails.high.url;
              var country=items.snippet.country;
              var uploadsID =items.contentDetails.relatedPlaylists.uploads;
              var viewCount=items.statistics.viewCount;
              var subscribers=items.statistics.subscriberCount;
              var hiddenSubscribers=items.statistics.hiddenSubscriberCount;
              var videoCount=items.statistics.videoCount;
              var data=new ChannelData(id,title,country,url,description,publishedAt,subscribers,thumbnail,uploadsID,videoCount,viewCount,hiddenSubscribers);
              addChannelDetails(data);
            },
            function(err) { console.error("Execute error", err); });
}


//===========================Get Comments for a video by Id============================================

function getCommentsForVideo(videoId) {
  return gapi.client.youtube.commentThreads.list({
    "part": [
      "snippet"
    ],
    "maxResults": 100,
    "videoId": videoId
  })
      .then(function(response) {
              var dat=response.result;
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response.result);
            },
            function(err) { console.error("Execute error", err); });
  renderComments(dat);          
}

//=========================================================================================

gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: clientId});
  });
  function s(){
    channelDetails("UCNIPltykIATy0PhRp82uNMQ");
  }
 
  