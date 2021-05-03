import React from 'react';
import { Link, useLocation } from 'react-router-dom';

//hooks
import { RelatedVideosItem } from './RelatedVideosItem/RelatedVideosItem.component';

//styles
import styled from 'styled-components';
const Container = styled.div`
    padding 0px 20px 0px 20px;

    a{
        color:black;
    }

    @media(max-width: 1024px){
        padding:0;
    }
`;

export const RelatedVideos = ({videos=[]}) => {

    const { pathname } = useLocation();
    const parentRoute = pathname.split('/',2)[1];

    return <Container data-testid="related-videos">
        {   
            videos.map(video =>                
            <Link key={video.id} to={`/${parentRoute}/${video.id}`}>
                <RelatedVideosItem 
                    key={video.id} 
                    video={video}/>
            </Link>
            )
        }
    </Container>
}