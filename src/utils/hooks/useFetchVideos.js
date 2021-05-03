import { useState, useEffect } from 'react';
import { useGapi } from '../../utils/hooks/useGapi';
import { extractVideos } from '../extractVideos';
// const mockData = require('../../mock-data/youtube-video-api.json');

const updatePageTokens = (obj) => {
    const newTokens = {
        nextPageToken: obj.nextPageToken
    };
    obj.hasOwnProperty('prevPageToken')? newTokens.prevPageToken = obj.prevPageToken:newTokens.prevPageToken='';
    return newTokens;
}

const doSearch = async(gapi, searchText, pageToken) => {
    if(gapi !== null){
        const { body } = await gapi.client.youtube.search.list({
            "part":[
                "snippet"
            ],
            "type":"video",
            "maxResults":25,
            "q":searchText,
            "pageToken": pageToken
        });
        const bodyObj = JSON.parse(body);
        // State setter to actually set data from the API
        return {
            videos: extractVideos(bodyObj),
            loading: false,
            pageTokens: updatePageTokens(bodyObj)
        }
    }
    // State setter to avoid a crash until 
    // gapi is fully loaded from its hook
    return { 
        videos: [],
        loading: true,
        pageTokens:{
            nextPageToken:pageToken,
            prevPageToken:''
        }
    };
    // return { 
    //     videos: extractVideos(mockData),
    //     loading: false,
    //     pageTokens: updatePageTokens(mockData)
    // };
}

export const useFetchVideos = (searchText, pageToken='') =>{

    const gapi = useGapi();

    //1rst ever state set, the default value
    const [state, setState] = useState({
        videos:[],
        loading:true,
        pageTokens:{
            nextPageToken:pageToken,
            prevPageToken:''
        }
    });

    useEffect(()=>{
        // iife stands for "Instant Invoked Function Expression"
        // personal note: It may have any name we want, it doesn't
        // need that specific name to work
        (async function iife(param1, param2, param3){
            const response = await doSearch(param1, param2, param3);
            setState(response);
        })(gapi,searchText, pageToken);// The params we need to call iife function
    },[gapi,searchText, pageToken]);

    return state;
}

