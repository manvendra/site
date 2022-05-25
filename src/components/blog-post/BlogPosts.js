
import './BlogPosts.css';
import { Outlet } from 'react-router-dom';

const BlogPosts = () => {
    return (
        <div className='outer-container blog-post'>

            <div className='description-bar blog-post-description'>
                <span>These are my posts from Medium. for full list check  
                    <a href='https://medium.com/@manvendrapsingh' target="_blank">here</a>  
                     {/* and   
                    <a href='http://mps-kaleidoscope.blogspot.com' target="_blank">Google Blogger</a>    */}
                 </span>
                <div className="quote"> -- powered by - google api.</div>
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