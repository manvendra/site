import React from 'react'
import { motion } from 'framer-motion'
import './ReviewCard.css'
import Masonry from 'react-masonry-css'
import primeimg from '../../images/primeday.png'


function PrimeDay() {

    const primeDealAudio = [
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B07YVYZ8T5&asins=B07YVYZ8T5&linkId=ac87d4bcf08d96b431be680b13496e9c&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B07Q9MJKBV&asins=B07Q9MJKBV&linkId=85510c62a10e99307660029ee2b22679&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B098FKXT8L&asins=B098FKXT8L&linkId=83c903bc106942ce1b663b8a2b71d88a&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B085WTWYS4&asins=B085WTWYS4&linkId=fcf8a610fc8bea381c317995b408fa40&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B00NCSIN4W&asins=B00NCSIN4W&linkId=475f57cbbfa373ffd0d36027a3c717e0&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B098FH5P3C&asins=B098FH5P3C&linkId=29f1ffc9958750fc8db3ec8aba851831&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08CJP6V6W&asins=B08CJP6V6W&linkId=d9242247b63414daa103de8ad590b5a1&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09YL76VSR&asins=B09YL76VSR&linkId=2f487ed5b876c3aac272d653d58fc31a&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B094C4VDJZ&asins=B094C4VDJZ&linkId=f733eb8fb01c3d734775812902f4f861&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B0863TXGM3&asins=B0863TXGM3&linkId=02c60139f7bfcbfaf6013e5ece65a142&show_border=true&link_opens_in_new_window=true',
    ]

    const cameras = [

        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09FCF5SNR&asins=B09FCF5SNR&linkId=b6eeb24592ca0ae4365ebb0f87d6fbc5&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09J9ZWZ9Q&asins=B09J9ZWZ9Q&linkId=60cdbd686de2475c804bdeb513a2eebd&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09GZQ1MHC&asins=B09GZQ1MHC&linkId=31d966e6cd7b9f8267dfff7d9cdc829c&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08SGC46M9&asins=B08SGC46M9&linkId=3cec320763a86ef6330187c1a033ebd3&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08N5NQ69J&asins=B08N5NQ69J&linkId=2867b0db1299b2dbc109dfe978c9a1b8&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09NLDYGHQ&asins=B09NLDYGHQ&linkId=61dd75c4a17cf0e210dc335528428e45&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08ZN97SWW&asins=B08ZN97SWW&linkId=a344bd69cf61af9dd59a11269e184282&show_border=true&link_opens_in_new_window=true',
    ]

    const lights = [
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08YSYKBLV&asins=B08YSYKBLV&linkId=0590e312f76ef66d7ec27824efe18f2d&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08YSYKH19&asins=B08YSYKH19&linkId=5617155e8f93c2cb010c9fd0e039e963&show_border=true&link_opens_in_new_window=true',

        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B0948DYW2V&asins=B0948DYW2V&linkId=2859c6f4d912e40d61c93708dd77feb8&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08TB8Z5HF&asins=B08TB8Z5HF&linkId=a935b5a6dd04145c786071429fd27c75&show_border=true&link_opens_in_new_window=true',
    ]

    const otherDevices = [
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09F1RH8C5&asins=B09F1RH8C5&linkId=c03268d16cfb6026651e1f1662af5fc7&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08J4C8871&asins=B08J4C8871&linkId=70698d1ae56fff941bc6edec1dfe5813&show_border=true&link_opens_in_new_window=true',

        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B07RCNB2L3&asins=B07RCNB2L3&linkId=2691a5b02be1514849cf78bf47864baa&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B091FXLMS8&asins=B091FXLMS8&linkId=4e7ba5e7a5a138921d634268a102d914&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B07B8W2KHZ&asins=B07B8W2KHZ&linkId=1b6649e738a30dff8264ab28cde9e688&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B091FXQQMQ&asins=B091FXQQMQ&linkId=06fcceb48af14cc32f00164eaccf7d70&show_border=true&link_opens_in_new_window=true',
    ]

    const smallElectronics = [
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B07VTK654B&asins=B07VTK654B&linkId=4d67b25ab179a8cacb9279fb5460dfd3&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09HF7W3N6&asins=B09HF7W3N6&linkId=9f9c87b756488d925380b64e9b2d238c&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B083TMWFSZ&asins=B083TMWFSZ&linkId=a37a44c30c7d58824ee3df96ba7086da&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08M5TJPXY&asins=B08M5TJPXY&linkId=fd5b0736b10a668dba9946ef1df81419&show_border=true&link_opens_in_new_window=true',
    ]

    const kitchen = [
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B08QZXFSKP&asins=B08QZXFSKP&linkId=3630458746b52352e7b5d58ed932e866&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09K6MK5VN&asins=B09K6MK5VN&linkId=4453c38993badd13bee312644d907e2d&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B083248S3B&asins=B083248S3B&linkId=f849050d0ba195aa4633daecc676a49c&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B078NN17K3&asins=B078NN17K3&linkId=9567b662dd3617c500a62e7bba3b3533&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B07N3GRVGS&asins=B07N3GRVGS&linkId=8b914aae377a4234fa2be64e82bb121c&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09BGSY58L&asins=B09BGSY58L&linkId=2c2ace9d7c053538efb00035b10ad263&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B01MF7EFYB&asins=B01MF7EFYB&linkId=6f7733222ab8cd0a76f89190b1e7aff5&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09BB74CLW&asins=B09BB74CLW&linkId=03fe8bdb258c95b0d5b9c7baeb8ed236&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B09B82LJ21&asins=B09B82LJ21&linkId=5ffd998f4a8e62673498757386ba997b&show_border=true&link_opens_in_new_window=true',
    ]

    const gitCard = [
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B006PJHP62&asins=B006PJHP62&linkId=b356aef078239d374daf7a573cd24167&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B00GOLGXK0&asins=B00GOLGXK0&linkId=6e702b9c906fd444739f076bf78de27a&show_border=true&link_opens_in_new_window=true'
    ]

    const luggage = [
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B0133APKFI&asins=B0133APKFI&linkId=366270173c626133a56fea919bbee178&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B01MRZC1OM&asins=B01MRZC1OM&linkId=da2d1c4ceb4ed36482ed698d74f17e80&show_border=true&link_opens_in_new_window=true',
        '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US&placement=B07H5RMC5Z&asins=B07H5RMC5Z&linkId=f23de3cc6e14f9d2c3383114304655bd&show_border=true&link_opens_in_new_window=true',
    ]

    return (
        <div className='main-container review-container prime-day' >

            <div className='container-description caption'>
                <img src={primeimg} alt='prime day' />
                <div>
                    <div className='big-font-shadow '>
                        My Favorite Prime Day 2022 Deals.<br></br>
                        <span className='' style={{ color: "red" }}>Click "Shop now" to see deal prices, </span>
                        <span className='blink_me' style={{ color: "red" }}>Valid till <b>July-13-2022</b></span>
                    </div>
                </div>
            </div>

            <div className='inner-container '>

                <div className='simple-card'>
                    <header>Audio</header>
                    <section>
                        {primeDealAudio.map((src, index) => (
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
                    </section>
                </div>

                <div className='simple-card'>
                    <header>Smart Home</header>
                    <section>
                        <div className='simple-card'>
                            <header>Security Cameras</header>
                            <section>
                                {cameras.map((src, index) => (
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
                            </section>
                        </div>
                        <div className='simple-card'>
                            <header>Lights</header>
                            <section>
                                {lights.map((src, index) => (
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
                            </section>
                        </div>

                        <div className='simple-card'>
                            <header>Smart plugs and other devices</header>
                            <section>
                                {otherDevices.map((src, index) => (
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
                            </section>
                        </div>

                    </section>
                </div>


                <div className='simple-card'>
                    <header>Small Electronics</header>
                    <section>
                        {smallElectronics.map((src, index) => (
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
                    </section>
                </div>

                <div className='simple-card'>
                    <header>Kitchen</header>
                    <section>
                        {kitchen.map((src, index) => (
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
                    </section>
                </div>

                <div className='simple-card'>
                    <header>Luggage (Not everything on prime-day deal)</header>
                    <section>
                        {luggage.map((src, index) => (
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
                    </section>
                </div>

                <div className='simple-card'>
                    <header>Gift Cards</header>
                    <section>
                        {gitCard.map((src, index) => (
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
                    </section>
                </div>

            </div>
        </div>
    )
}

export default PrimeDay;