import FeedList from "./insta/FeedList";
import './Photography.css'
import { motion } from "framer-motion"
import { slide ,duration} from '../../common/animation'
const Photography = () => {
    return (
        <motion.div className='main-container'
            variants={slide}
            initial="initial"
            animate="animate"
            transition={duration.medium}>
            <div className="container-description">
                <div>
                    What an iPhone can do, With little post processing.
                    <div className="quote"> - Photos were taken only by iPhones, Mostly by iPhone7</div>
                </div>
            </div>
            <div className="inner-container">
                <FeedList />
            </div>
        </motion.div>
    );
}
export default Photography