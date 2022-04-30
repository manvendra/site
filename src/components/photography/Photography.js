import FeedList from "./insta/FeedList";
import './Photography.css'

const Photography = () => {
    return (
        <div>
            <div className="photography-desc">
                <span>
                    This is what an iPhone can do,
                    with the help of post processing.
                    <div className="quote"> -- All the photos were taken by iPhones, Most of them by iPhone-7.</div>
                    
                </span>
            </div>
            <FeedList />
        </div>
    );
}
export default Photography