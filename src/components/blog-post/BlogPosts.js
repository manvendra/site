
import './BlogPosts.css';
import { Outlet } from 'react-router-dom';
const BlogPosts = () => {
    return (
        <div className='blog-post'>

            <div className='blog-post-description'>
                <span>These are my posts from 
                    <a href='https://medium.com/@manvendrapsingh' target="_blank">Medium</a> 
                     and   
                    <a href='http://mps-kaleidoscope.blogspot.com' target="_blank">Google Blogger</a>   
                 </span>
                <div className="quote"> -- Search works only on google blogs.</div>
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