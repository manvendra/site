import FeedList from "./insta/FeedList";
import './Photography.css'

const Photography = () => {
    return (
        <div className="main-container">
            <div className="container-description">
                <div>
                    What an iPhone can do, With little post processing.
                    <div className="quote"> - Photos were taken only by iPhones, Mostly by iPhone7</div>           
                </div>
            </div>
            <div className="inner-container">
            <FeedList />
            </div>
        </div>
    );
}
export default Photography