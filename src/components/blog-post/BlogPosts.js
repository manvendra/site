

import { MDBInput } from 'mdb-react-ui-kit';
import { Outlet } from 'react-router-dom';
const BlogPosts = () => {
    return (
        <div className='pt-5 m-3'>
            <div id='search-posts' >
                <MDBInput label='Search all posts ...'
                    id='search-post-input' type='text' />
            </div>
            <div className='mt-5'>
                <Outlet />
            </div>
        </div>
    );
}
export default BlogPosts;