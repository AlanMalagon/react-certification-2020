import React from 'react';
import { render, screen } from '@testing-library/react';
import { VideoGridItem } from '../../../../components/VideosGrid/VideoGridItem/VideoGridItem.component';
import { parseDatetime } from '../../../../utils/parseDatetime';
import GlobalProvider from '../../../../providers/Global.provider';
import { BrowserRouter } from 'react-router-dom';

const mockData = {
    kind: "youtube#searchResult",
    etag: "_PVKwNJf_qw9nukFeRFOtQ837o0",
    id: {
      kind: "youtube#channel",
      channelId: "UCPGzT4wecuWM0BH9mPiulXg"
    },
    snippet: {
      publishedAt: "2014-09-27T01:39:18Z",
      channelId: "UCPGzT4wecuWM0BH9mPiulXg",
      title: "Mock video title",
      description: "Mock description",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo"
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo"
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo"
        }
      },
      channelTitle: "Mock channel title",
      liveBroadcastContent: "upcoming",
      publishTime: "2014-09-27T01:39:18Z"
    }
  }

describe('VideoGridItem', ()=>{
    it('Should render the component correctly', ()=>{
        render(<GlobalProvider>
            <BrowserRouter>
              <VideoGridItem video={mockData}/>
            </BrowserRouter>
          </GlobalProvider>);
        const title = screen.getByText(/mock video title/i);
        const info = screen.getByText(/mock channel title • 27 sept. 2014/i);
        expect(title).toBeInTheDocument();
        expect(info).toBeInTheDocument();
    });

    it('parseDatetime() should parse the date correctly', ()=>{
        const parsedDate = parseDatetime(mockData.snippet.publishedAt);
        expect(parsedDate).toBe("27 sept. 2014");
    });
});