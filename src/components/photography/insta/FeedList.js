import Feed from './Feed';
import useStore from "../../../stores/useStore";
import Masonry from 'react-masonry-css'
import {MASONRY_COLUMN_BREAKPOINTS as breakPoints} from '../../../common/Constants'

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
        <div className='feedList'>
        <Masonry
            breakpointCols={breakPoints}
            className="masonry-container "
            columnClassName="masonry-grid_column"
            >
            {feeds?.map(feed => <Feed key={feed?.id} feed={feed} />)}
        </Masonry>
        </div>
    )
}

export default FeedList;