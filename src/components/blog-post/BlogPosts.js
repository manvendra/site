
import './BlogPosts.css';
import { Outlet } from 'react-router-dom';
const BlogPosts = () => {
    return (
        <div className='blog-post'>

            <div className='blog-post-description'>
                <span>
                    These are my posts from Medium or Google Blogger 
                    <div className="quote"> -- Search is available only for google blogs.</div>     
                </span>
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