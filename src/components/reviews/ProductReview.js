import React from 'react'
import { motion } from 'framer-motion'
import './ReviewCard.css'
import AmazonAdd from './AmazonAd'
import Masonry from 'react-masonry-css'


function ProductReview() {

    const amazonItemsIframeSource = [
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09KY4HRFC&asins=B09KY4HRFC&linkId=69e6a17b065434e7686d61440153f796&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B017PFPUHK&asins=B017PFPUHK&linkId=d5d1ba8543f79b6c15ab8b18bf313ea4&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B07QLLM9W5&asins=B07QLLM9W5&linkId=45cf30f719eb3145d6d8be6ae2b3e41a&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09M7WVQ6D&asins=B09M7WVQ6D&linkId=6d3817c4198ef2c31bbc3c6c1bd15b1c&show_border=true&link_opens_in_new_window=true'
    ]
  
    const breakPoints= {
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
                    {amazonItemsIframeSource.map((src, index) => (
                        <motion.div
                            animate={{scale: [1, 1.2, 1], duration: 2}}>

                            <iframe title={index} key={index}
                                className='amazon-iframe review-card '
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
                <AmazonAdd />
            </div>
        </div>
    )
}

export default ProductReview