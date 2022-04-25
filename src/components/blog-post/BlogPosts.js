
import './BlogPosts.css';
import { Outlet } from 'react-router-dom';
const BlogPosts = () => {
    return (
        <div className='blog-post'>

            <div className='blog-post-description'>
                &nbsp;
            </div>
            <div className='search-posts' >
                <input defaultValue='Search all posts ...' type='text' />
            </div>
            <div className='blog-content'>
                <Outlet />
            </div>
        </div>
    );
}
export default BlogPosts;