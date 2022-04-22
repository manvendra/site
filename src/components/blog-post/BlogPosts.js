

import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import PostsList from './PostsList'
const BlogPosts = () => {
    return (
        <div className='pt-5 m-3'>
            <div id='search-posts' >
                <MDBInput label='Search Posts ...' id='search-post-input'  type='text' />
            </div>
            <PostsList />

        </div>
    );
}
export default BlogPosts;