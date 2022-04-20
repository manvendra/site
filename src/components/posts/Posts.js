import './Posts.css'
import PostOverview from './PostOverview';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as Constants from '../../common/Constants'
import { CardGroup, Row } from 'react-bootstrap'

const Posts = () => {
    const [postDataList, setPostDataList] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                console.log('going to call backend');
                const response = await axios.get('http://localhost:3001/items')
                console.log('done calling backend data returned is ');
                console.log(response.data);
                setPostDataList(response.data); //for local development with json server removing .itemsm from here put it back 
            } catch (err) {
                console.error('error in calling backend');
                if (err.response) {
                    console.error(err.response.data)
                    console.error(err.response.status)
                    console.error(err.response.header)
                } else {
                    console.log('printing error - ' + err.message)
                }
            }
        }
        fetchPosts();
    }, [])

    return (
        <section className="posts">
            <div className="container">

                <CardGroup>
                    <Row xs={1} md={4}>
                        {postDataList.map(postData => (
                            <PostOverview key={postData.id} postData={postData} />

                        ))}
                    </Row>
                </CardGroup>
            </div>
        </section>
    );
}

export default Posts;