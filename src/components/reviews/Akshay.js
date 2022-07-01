import React from 'react'
import { motion } from 'framer-motion'
import './ReviewCard.css'
import Masonry from 'react-masonry-css'


function Akshay() {

    const amazonItemsIframeSource = [
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09KY4HRFC&asins=B09KY4HRFC&linkId=69e6a17b065434e7686d61440153f796&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B017PFPUHK&asins=B017PFPUHK&linkId=d5d1ba8543f79b6c15ab8b18bf313ea4&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B07QLLM9W5&asins=B07QLLM9W5&linkId=45cf30f719eb3145d6d8be6ae2b3e41a&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09YDJ89NW&asins=B09YDJ89NW&linkId=879b1db4732a9ebfbced81e4ff2ad2a1&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08HYP71QK&asins=B08HYP71QK&linkId=80b9319321058206b892294ac9b1a5e2&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09YDJKC6H&asins=B09YDJKC6H&linkId=762e1367080ea9a7a5aa4832137e8ac4&show_border=true&link_opens_in_new_window=true',
    ]

    const myItemsIframeSource = [
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09M7WVQ6D&asins=B09M7WVQ6D&linkId=6d3817c4198ef2c31bbc3c6c1bd15b1c&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B01DZKDYZY&asins=B01DZKDYZY&linkId=492c6af4d9b994bae9a33e33c2b88788&show_border=true&link_opens_in_new_window=true',
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

                <Masonry
                    breakpointCols={breakPoints}
                    className="masonry-container "
                    columnClassName="masonry-grid_column"
                >
                    {amazonItemsIframeSource.map((src, index) => (
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], duration: 2 }}>

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
            </div>
        </div>
    )
}

export default Akshay;