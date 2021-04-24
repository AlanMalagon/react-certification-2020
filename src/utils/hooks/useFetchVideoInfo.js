import { useState, useEffect } from 'react';
import { useGapi } from '../../utils/hooks/useGapi';
const mockData = require('../../mock-data/youtube-video-api-id.json').items[0];

const getRelatedVideos = async(gapi, videoId) =>{
    // if(gapi !== null){
    //     const { body } = await gapi.client.youtube.videos.list({
    //         "part":[
    //             "snippet"
    //         ],
    //         "type":"video",
    //         "id":videoId,
    //     });
    //     return { 
    //         videoInfo: JSON.parse(body).items[0],
    //         loading: false
    //     }
    // }
    // return { 
    //     videoInfo: null,
    //     loading: true
    // };
    return { 
        videoInfo: mockData,
        loading: false
    };
}

export const useFetchVideoInfo = (videoId) =>{
    const gapi = useGapi();
    const [state, setState] = useState({
        videoInfo:null,
        loading:true,
    });

    useEffect(()=>{
        (async function iife(param1, param2){ 
            const response = await getRelatedVideos(param1, param2);
            setState(response);
        })(gapi,videoId);
    },[gapi,videoId]);

    return state;
}

