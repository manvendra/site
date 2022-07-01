import React from 'react'
import { motion } from 'framer-motion'
import './ReviewCard.css'
import Masonry from 'react-masonry-css'


function ProductReview() {


    const myItemsIframeSource = [
      '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08WX2B8PG&asins=B08WX2B8PG&linkId=9e4e5ea0fa203d9e1b05e5d3700326ac&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B07TRBYK18&asins=B07TRBYK18&linkId=a8862587a0ec6a0c4b7cfc50c49b8112&show_border=true&link_opens_in_new_window=true'
    ]

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
                <span className='big-font-shadow'>
                    This is a testing page to figure out product review website !!
                </span>
            </div>

            <div className='inner-container '>
                <Masonry
                    breakpointCols={breakPoints}
                    className="masonry-container "
                    columnClassName="masonry-grid_column"
                >
                    {myItemsIframeSource.map((src, index) => (
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], duration: 2 }}>

                            <iframe title={index} key={index}
                                className='amazon-iframe my-review-card'
                                sandbox="allow-popups 
                                        allow-scripts 
                                        allow-modals 
                                        allow-forms 
                                        allow-same-origin"
                                src={src}>
                            </iframe>

                        </motion.div>
                    ))}
                </Masonry>
            </div>
        </div>
    )
}

export default ProductReview