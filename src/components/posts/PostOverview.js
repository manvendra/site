import './PostOverview.css'
import { useEffect } from 'react';
import * as Utils from '../../common/Utils'

const PostOverview = ({ postData }) => {
    useEffect(() => {
        console.debug('In postOverview useEffect. PostData is ' + postData);
    })
    return (
        <section className="post">
            <header>
                {postData?.title}
            </header>
            <hr></hr>
            <article>
                <img src={`${postData?.images?.[0]?.url}`} alt="" />
                <p>
                    {Utils.extractOverviewFromContent(postData.content)}
                </p>
            </article>
        </section>
    );
}
export default PostOverview;

