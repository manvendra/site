

import { MDBInput } from 'mdb-react-ui-kit';
import { Outlet } from 'react-router-dom';
const BlogPosts = () => {
    return (
        <div className='pt-5 m-3 column'>
            <div id='search-posts' >
                <MDBInput label='Search all posts ...' 
                id='search-post-input'  type='text' />
            </div>
            <Outlet/>
        </div>
    );
}
export default BlogPosts;