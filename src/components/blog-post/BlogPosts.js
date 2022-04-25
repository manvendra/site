
import './BlogPosts.css';
import { Outlet } from 'react-router-dom';
const BlogPosts = () => {
    return (
        <div className='blogPost'>
            <div>
                <div className='blogPostDescription'>

                </div>
                <div className='search-posts' >
                    <input defaultValue='Search all posts ...'  type='text' />
                </div>
            </div>
            <div className='blogContent'>
                <Outlet />
            </div>
        </div>
    );
}
export default BlogPosts;