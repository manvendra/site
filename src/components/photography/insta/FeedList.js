import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as Constants from '../../../common/Constants'
import Feed from './Feed';


const FeedList=() => {
    const [feeds, setFeeds] = useState();

    const url = Constants.URL_INSTA_FEED_PROD+ '?' + Constants.QRY_PARAM_INSTA_FEED_LIST + '&access_token=' + Constants.access_token;
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
    }, []);

    return (
             <div className='feeds-container'>
                {feeds?.map(feed=> <Feed key={feed?.id} feed={feed}/>)}
            </div>
    )
}

export default FeedList;