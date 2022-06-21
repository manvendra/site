import FeedList from "./insta/FeedList";
import './Photography.css'
import { motion } from "framer-motion"
import { slide ,duration} from '../../common/animation'
import instagram from '../../images/api/fb-dev.webp'

const Photography = () => {
    return (
        <motion.div className='main-container'
            variants={slide}
            initial="initial"
            animate="animate"
            transition={duration.medium}>
            <div className="container-description">
                <div>
                    All images are taken with iPhone (<i>mostly iPhone7</i>). Followed by some post processing. 
                    <div className="quote "> -Feed powered by &nbsp;
                        <img className='img-s round' 
                            src={instagram} alt="" />
                    </div>
                </div>
            </div>
            <div className="inner-container">
                <FeedList />
            </div>
        </motion.div>
    );
}
export default Photography