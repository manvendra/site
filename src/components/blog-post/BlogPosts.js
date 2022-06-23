
import './BlogPosts.css';
import { Outlet } from 'react-router-dom';
import { motion } from "framer-motion"
import { opacity,duration} from '../../common/animation'
import ggl from '../../images/api/ggl-api.png'

const BlogPosts = () => {
    return (
        <motion.div className='main-container'
            variants={opacity}
            initial="initial"
            animate="animate"
            transition={duration.fast}>
            <div className='container-description'>
                <span>My posts from Medium. for full list check
                    <a href='https://medium.com/@manvendrapsingh' target="_blank">here</a>
                    {/* and   
                    <a href='http://mps-kaleidoscope.blogspot.com' target="_blank">Google Blogger</a>    */}
                </span>
                <div className="quote "> - Content powered by &nbsp;
                        <img className='img-s round' 
                            src={ggl} alt="" />
                    </div>
            </div>
            <div className='search-posts' >
                <input defaultValue='Search posts ... ' type='text' />
            </div>
            <div className='inner-container'>
                <Outlet />
            </div>
        </motion.div>
    );
}
export default BlogPosts;