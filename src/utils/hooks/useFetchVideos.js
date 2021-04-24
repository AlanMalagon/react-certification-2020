import { useState, useEffect } from 'react';
import { useGapi } from '../../utils/hooks/useGapi';
import { extractVideos } from '../extractVideos';
const mockData = require('../../mock-data/youtube-video-api.json');

const doSearch = async(gapi, searchText) => {
    // if(gapi !== null){
    //     const { body } = await gapi.client.youtube.search.list({
    //         "part":[
    //             "snippet"
    //         ],
    //         "type":"video",
    //         "maxResults":25,
    //         "q":searchText
    //     });
    //     // State setter to actually set data from the API
    //     return { 
    //         videos: extractVideos(JSON.parse(body)),
    //         loading: false
    //     }
    // }
    // // State setter to avoid a crash until 
    // // gapi is fully loaded from its hook
    // return { 
    //     videos: [],
    //     loading: true
    // };
    return { 
        videos: extractVideos(mockData),
        loading: false
    };
}

export const useFetchVideos = (searchText) =>{
    const gapi = useGapi();

    //1rst ever state set, the default value
    const [state, setState] = useState({
        videos:[],
        loading:true,
    });

    useEffect(()=>{
        // iife stands for "Instant Invoked Function Expression"
        // personal note: It may have any name we want, it doesn't
        // need that specific name to work
        (async function iife(param1, param2){
            const response = await doSearch(param1, param2);
            setState(response);
        })(gapi,searchText);// The params we need to call iife function
    },[gapi,searchText]);

    return state;
}

