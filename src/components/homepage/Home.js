import './Home.css';
import Header from "./Header";
import HomeContent from "./HomeContent";

import {motion} from "framer-motion"
import {animation} from '../../common/animation'

const Home = () => {
    return (
        <motion.div className='home'
        variants={animation}
        initial="initial"
        animate="animate"
        transition={animation.transition}>
            <Header />
            <HomeContent />
        </motion.div>
    );
}
export default Home;