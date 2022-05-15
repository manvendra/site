import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as Constants from '../../../common/Constants'
import Feed from './Feed';


const FeedList=() => {
    const [feeds, setFeeds] = useState();

    const url = Constants.PHOTOS_URL+ '?' + Constants.PHOTOS_QRY_PARAM + '&access_token=' + Constants.PHOTOS_TKN;
    useEffect(() => {
        const fetchFeeds = async () => {
            try {
                const response = await axios.get(url)
                setFeeds(response.data.data);
            } catch (err) {
                console.log("printing error - " + err.message);
            }
        };
        fetchFeeds();
    }, [url]);

    //TODO: Convert this into a Masonry  to have any picture posted to instagram 
    return (
             <div className='feeds-list'>
                {feeds?.map(feed=> <Feed key={feed?.id} feed={feed}/>)}
            </div>
    )
}

export default FeedList;