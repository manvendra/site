import React from 'react'
import { motion } from 'framer-motion'
import './ReviewCard.css'
import Masonry from 'react-masonry-css'
import UnderConstruction from '../../images/ndr-cnstrshn.svg'

function ProductReview() {


    

    const breakPoints = {
        default: 6,
        1468: 7,
        1200: 6,
        768: 4,
        599: 2
    };

    return (
        <div className='main-container review-container' >

            <div className='container-description caption'>
                <span className='big-font-shadow text-center'>
                    Bear with me, Something awesome will be here very soon !!
                </span>
            </div>

            <div className='inner-container '>
   
               
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], duration: 2 }}>

<div className='content-center'>
                            <img src={UnderConstruction} alt="Under construction" className='img-xl' />
                            <h4> Under Construction !</h4>
                        </div>

                        </motion.div>
                    
         
            </div>
        </div>
    )
}

export default ProductReview