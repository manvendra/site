import FeedList from "./insta/FeedList";
import './Photography.css'
import { motion } from "framer-motion"
import { slide ,duration} from '../../common/animation'
import instagram from '../../images/social/instagram.svg'
import * as util from '../../common/Utils'
import { SOCIAL_LINKS as link } from '../../common/Constants'

const Photography = () => {
    return (
        <motion.div className='main-container'
            variants={slide}
            initial="initial"
            animate="animate"
            transition={duration.medium}>
            <div className="container-description">
                <div>
                    What an iPhone can do with little post processing. <i>Mostly iPhone7</i>
                    <div className="quote "> -Powered by &nbsp;
                        <img className='img-xs pointer' 
                            src={instagram} alt="" 
                            onClick={() => util.openInNewTab(link.INSTAGRAM)} />
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