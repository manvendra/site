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
                    What an iPhone can do.(<i>mostly iPhone 7</i>)
                    <div className="quote "> -Feed powered by &nbsp;
                        <img className='img-s circle' 
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