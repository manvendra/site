

import { MDBBtn } from 'mdb-react-ui-kit';
import PostsList from './PostsList'
const BlogPosts = ()=> {
    return(
        <div className='pt-5 m-3'>
             <form className='input-group w-auto'>
                <input type='search' className='form-control' placeholder='Search Posts ...' aria-label='Search' />
                <MDBBtn color='primary'>Search</MDBBtn>
            </form>
            <PostsList/>
           
        </div>
    );
}
export default BlogPosts;