// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBnRT0yHNfu7u-2RoYGwBMKP4Se-T5Cgis",
    authDomain: "mate-15935.firebaseapp.com",
    databaseURL: "https://mate-15935.firebaseio.com",
    projectId: "mate-15935",
    storageBucket: "mate-15935.appspot.com",
    messagingSenderId: "16023078075",
    appId: "1:16023078075:web:d376c5600421e63886159e",
    measurementId: "G-P8GMGM9S0M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db=firebase.firestore();

//============================================render data to Channel Table================================


//=========================render Comments======================================================

function renderComments(dat){
    var list= document.getElementById("comment-table");
    var CommentArray=dat;
    for(var i=0;i<CommentArray.length;i++){
        
        var len = CommentArray.items.length;
        var comm=CommentArray.items[i].snippet.topLevelComment.snippet.textDisplay;
        var authorName=CommentArray.items[i].snippet.topLevelComment.snippet.authorDisplayName;
        var authorImageUrl=CommentArray.items[i].snippet.topLevelComment.snippet.authorProfileImageUrl;
        var authorChannelUrl=CommentArray.items[i].snippet.topLevelComment.snippet.authorChannelUrl;
        var authorChannelId=CommentArray.items[i].snippet.topLevelComment.snippet.authorChannelId.value;
        var publishedDate=CommentArray.items[i].snippet.topLevelComment.snippet.publishedAt;

        console.log(comm);
        console.log("Name ",authorName);

        var listRow=`<tr>
        <td>${i+1}</td>
        <td>${comm}</td>
        
      </tr>`
        list.innerHTML+=listRow;
    }
    
}
console.log("Running get...");
console.log("Done & Dusted !!!!!!!!!");
console.log("Updated 11");
