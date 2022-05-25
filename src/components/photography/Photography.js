import FeedList from "./insta/FeedList";
import './Photography.css'

const Photography = () => {
    return (
        <div className="outer-container photography">
            <div className="description-bar photography-desc">
                <div>
                    What an iPhone can do, With little post processing.
                    <div className="quote"> - Photos were taken only by iPhones, Mostly by iPhone7</div>           
                </div>
            </div>
            <FeedList />
        </div>
    );
}
export default Photography