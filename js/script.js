function getAndFetch(){
    getAll().then((channelData) =>{
        var id=null;
        for(var i=0;i<channelData.length;i++){
            id=channelData[i].data().ID;
            channelDetails(id);
            id=null;
        }
    }).catch((result)=>{
        console.log(result);
    })
}


function sortingSubscribers(collectionArray){
    collectionArray.sort((a,b) =>{
        return b.data().Subscribers-a.data().Subscribers;
    })
    for(let i=0;i<collectionArray.length;i++){
        console.log(collectionArray[i].data().Subscribers);
}
function sortingViewCount(collectionArray){
    collectionArray.sort((a,b) =>{
        return b.data().ViewCount-a.data().ViewCount;
        })
}
    for(let i=0;i<collectionArray.length;i++){
        console.log(collectionArray[i].data().Subscribers);
    }
}

function btn(){
    authenticate().then(()=>{
        loadClient().then(()=>{
            console.log("getting comments")
            getCommentsForVideo("uuF45i8bOF0");
        })
    })
}
