import { useState, useEffect } from 'react';

export const useGapi = () => {
    const [gapi ,setGapi] = useState(null);

    const initGapi = async() =>{
        try{
            await window.gapi.client.setApiKey(process.env.YOUTUBE_API_KEY);
            await window.gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');
            setGapi(window.gapi);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        window.gapi.load('client',initGapi);
    }, []);

    return gapi;
}
