import './Home.css';
import Header from "./Header";
import HomeContent from "./HomeContent";

import {motion} from "framer-motion"
import {slide,duration} from '../../common/animation'

const Home = () => {
    return (
        <motion.div className='home'
        variants={slide}
        initial="initial"
        animate="animate"
        transition={duration.medium}>
            <Header />
            <HomeContent />
        </motion.div>
    );
}
export default Home;