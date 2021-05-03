export const extractVideos = (data) => {
    return data.items.map(item=>{
        if(item.id.hasOwnProperty('videoId')){
            item.id = item.id.videoId;
        }
        return item;
    });
}