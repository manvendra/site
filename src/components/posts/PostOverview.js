import './PostOverview.css'
import { useEffect } from 'react';
import * as Utils from '../../common/Utils'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

const PostOverview = ({ postData }) => {
    return (

        <Card border="info" style={{ width: '20rem' }}>
            <Card.Header bg="info">{postData?.title}</Card.Header>
            <Card.Img variant='top' src={`${postData?.images?.[0]?.url}`} />

            <Card.Body>
                <Card.Title>{postData?.title}</Card.Title>
                <Card.Text>
                    {Utils.extractOverviewFromContent(postData.content)}
                </Card.Text>
            </Card.Body>

            <Card.Footer>
                <Button variant="primary">Read More</Button>
            </Card.Footer>
        </Card>


    );
}
export default PostOverview;

