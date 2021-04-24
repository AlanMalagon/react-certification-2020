import { useState, useEffect } from 'react';
import { useGapi } from '../../utils/hooks/useGapi';
import { extractVideos } from '../extractVideos';
const mockData = require('../../mock-data/youtube-video-api-related.json');

const getRelatedVideos = async(gapi, videoId) =>{
    // if(gapi !== null){
    //     const { body } = await gapi.client.youtube.search.list({
    //         "part":[
    //             "snippet"
    //         ],
    //         "type":"video",
    //         "relatedToVideoId":videoId,
    //     });
    //     return { 
    //         relatedVideos: extractVideos(JSON.parse(body)),
    //         loading: false
    //     }
    // }
    // return { 
    //     relatedVideos: null,
    //     loading: true
    // };
    return { 
        relatedVideos: extractVideos(mockData),
        loading: false
    };
}

export const useFetchRelatedVideos = (videoId) =>{
    const gapi = useGapi();
    
    const [state, setState] = useState({
        relatedVideos: null,
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

