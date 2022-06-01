import Feed from './Feed';
import useStore from "../../../stores/useStore";

import { useEffect } from "react";

const FeedList = () => {
    const fetchPhotos = useStore((state) => state.fetchPhotos);
    const shouldFetchPhotos = useStore((state) => state.shouldFetchPhotos);
    const feeds = useStore((state) => state.photos);

    useEffect(() => {
        if (shouldFetchPhotos === true) {
            fetchPhotos();
        }
    }, [fetchPhotos, shouldFetchPhotos]);
    //TODO: Convert this into a Masonry  to have any picture posted to instagram 
    return (
        <div className='cards-container'>
            {feeds?.map(feed => <Feed key={feed?.id} feed={feed} />)}
        </div>
    )
}

export default FeedList;