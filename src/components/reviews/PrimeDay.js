import React from 'react'
import { motion } from 'framer-motion'
import './ReviewCard.css'
import Masonry from 'react-masonry-css'
import primeimg from '../../images/primeday.png'
import  {generateIframeUrl}  from './Amazon'


function PrimeDay() {

    const wearable = [
        'placement=B09XVDX497&asins=B09XVDX497&linkId=f34bae83c5af9f3be9f139a78ff5b659',
        'placement=B082TYHYK5&asins=B082TYHYK5&linkId=fb027d5d73bfae7df2cd69995fdf0401',

        'placement=B09H5VPVKS&asins=B09H5VPVKS&linkId=62f3e560f92ae299eee74030f1eda40c',
        'placement=B09H5VS3FR&asins=B09H5VS3FR&linkId=2377d35c02daaf08e3ed7f63d05785bd',

        // 'placement=B07W6V2RNK&asins=B07W6V2RNK&linkId=860efdcd839e858d8a07e103afc8f10a',
        //  'placement=B07W7YBBVQ&asins=B07W7YBBVQ&linkId=91d4f9c814a108a960e61ae3c51897bc',

        'placement=B09HF7W3N6&asins=B09HF7W3N6&linkId=9f9c87b756488d925380b64e9b2d238c',
        'placement=B08DKYLK4D&asins=B08DKYLK4D&linkId=3aaf5b8df80a050dbe5c4ab1c6d3c92f',
    ]

    const appleDeals = [
        'placement=B09HF7W3N6&asins=B09HF7W3N6&linkId=9f9c87b756488d925380b64e9b2d238c',

        'placement=B0932PL9BF&asins=B0932PL9BF&linkId=6aed325d2d0390c719e45bc9b257fa9b',


        'placement=B099BJBCJ3&asins=B099BJBCJ3&linkId=c2d823cece70d96b7c0a32f58cf33785',
        'placement=B09JQMJHXY&asins=B09JQMJHXY&linkId=8cd2d4035e7ce279b12f575129ae47a6',
        'placement=B09G9FPHY6&asins=B09G9FPHY6&linkId=872cca5c3be289e34631217e227ac9c3',
    ]
    const headphone = [
        'placement=B09BVMJX7K&asins=B09BVMJX7K&linkId=1f4ed628e73d236ee384001f99e6a18e',
        'placement=B07YVYZ8T5&asins=B07YVYZ8T5&linkId=ac87d4bcf08d96b431be680b13496e9c',
        'placement=B07Q9MJKBV&asins=B07Q9MJKBV&linkId=85510c62a10e99307660029ee2b22679',
        'placement=B098FKXT8L&asins=B098FKXT8L&linkId=83c903bc106942ce1b663b8a2b71d88a',
        'placement=B00NCSIN4W&asins=B00NCSIN4W&linkId=475f57cbbfa373ffd0d36027a3c717e0',
        'placement=B098FH5P3C&asins=B098FH5P3C&linkId=29f1ffc9958750fc8db3ec8aba851831',
        'placement=B0863TXGM3&asins=B0863TXGM3&linkId=02c60139f7bfcbfaf6013e5ece65a142',
    ]
    const earbuds = [

        'placement=B085WTWYS4&asins=B085WTWYS4&linkId=fcf8a610fc8bea381c317995b408fa40',
        'placement=B08CJP6V6W&asins=B08CJP6V6W&linkId=d9242247b63414daa103de8ad590b5a1',
        'placement=B09YL76VSR&asins=B09YL76VSR&linkId=2f487ed5b876c3aac272d653d58fc31a',
        'placement=B094C4VDJZ&asins=B094C4VDJZ&linkId=f733eb8fb01c3d734775812902f4f861',
        'placement=B096SSCV5K&asins=B096SSCV5K&linkId=49b09ae1cf0c9e61526d285deda707c0',
    ]
    const speaker = [
        'placement=B07QJ2117B&asins=B07QJ2117B&linkId=76c2cbbfda86ba1ea4f442621259c012',
        'placement=B08M5TJPXY&asins=B08M5TJPXY&linkId=fd5b0736b10a668dba9946ef1df81419',

    ]

    const cameras = [

        'placement=B09FCF5SNR&asins=B09FCF5SNR&linkId=b6eeb24592ca0ae4365ebb0f87d6fbc5',
        'placement=B09J9ZWZ9Q&asins=B09J9ZWZ9Q&linkId=60cdbd686de2475c804bdeb513a2eebd',
        'placement=B09GZQ1MHC&asins=B09GZQ1MHC&linkId=31d966e6cd7b9f8267dfff7d9cdc829c',
        'placement=B08SGC46M9&asins=B08SGC46M9&linkId=3cec320763a86ef6330187c1a033ebd3',
        'placement=B08N5NQ69J&asins=B08N5NQ69J&linkId=2867b0db1299b2dbc109dfe978c9a1b8',
        'placement=B09NLDYGHQ&asins=B09NLDYGHQ&linkId=61dd75c4a17cf0e210dc335528428e45',
        'placement=B08ZN97SWW&asins=B08ZN97SWW&linkId=a344bd69cf61af9dd59a11269e184282',
    ]

    const lights = [
        'placement=B08YSYKBLV&asins=B08YSYKBLV&linkId=0590e312f76ef66d7ec27824efe18f2d',
        'placement=B08YSYKH19&asins=B08YSYKH19&linkId=5617155e8f93c2cb010c9fd0e039e963',

        'placement=B0948DYW2V&asins=B0948DYW2V&linkId=2859c6f4d912e40d61c93708dd77feb8',
        'placement=B08TB8Z5HF&asins=B08TB8Z5HF&linkId=a935b5a6dd04145c786071429fd27c75',
    ]

    const otherDevices = [
        'placement=B09F1RH8C5&asins=B09F1RH8C5&linkId=c03268d16cfb6026651e1f1662af5fc7',
        'placement=B08J4C8871&asins=B08J4C8871&linkId=70698d1ae56fff941bc6edec1dfe5813',

        'placement=B08ZNSL1DB&asins=B08ZNSL1DB&linkId=1afbdacb488c8a7aa4eafac0efd12174',
        'placement=B091FXLMS8&asins=B091FXLMS8&linkId=4e7ba5e7a5a138921d634268a102d914',
        'placement=B07B8W2KHZ&asins=B07B8W2KHZ&linkId=1b6649e738a30dff8264ab28cde9e688',
        'placement=B091FXQQMQ&asins=B091FXQQMQ&linkId=06fcceb48af14cc32f00164eaccf7d70',
    ]

    const smallElectronics = [
        'placement=B07VTK654B&asins=B07VTK654B&linkId=4d67b25ab179a8cacb9279fb5460dfd3',
        'placement=B083TMWFSZ&asins=B083TMWFSZ&linkId=a37a44c30c7d58824ee3df96ba7086da',
    ]

    const electronicAcccessories = [
        'placement=B07QXV6N1B&asins=B07QXV6N1B&linkId=e6905b372c0dca42d3a458d755938427',
        'placement=B07XYY6Q34&asins=B07XYY6Q34&linkId=1b3916f20e2a57e8e53d3869a86e9d74',

        'placement=B07DHM9JZW&asins=B07DHM9JZW&linkId=50e5ab56d0187749a0285365f22728da',
        'placement=B07V5T11F1&asins=B07V5T11F1&linkId=ddf19d03f6c6e80943893f9ac6a55417',
        'placement=B099F6LNSC&asins=B099F6LNSC&linkId=18e9ddc1cbd7a7227cfa4c651c598f44',
        'placement=B099Z29R3Q&asins=B099Z29R3Q&linkId=9b2849d50cf57e732a1754128545298f',
        'placement=B09PGXWNWG&asins=B09PGXWNWG&linkId=baaec501ac5c170ff0f89804b7729bd4',
        'placement=B08YY9X1JV&asins=B08YY9X1JV&linkId=53300f8fd81e21c87bf9e6698026cbf6',

    ]
    const kitchen = [
        'placement=B08QZXFSKP&asins=B08QZXFSKP&linkId=3630458746b52352e7b5d58ed932e866',
        'placement=B09K6MK5VN&asins=B09K6MK5VN&linkId=4453c38993badd13bee312644d907e2d',
        'placement=B083248S3B&asins=B083248S3B&linkId=f849050d0ba195aa4633daecc676a49c',
        'placement=B078NN17K3&asins=B078NN17K3&linkId=9567b662dd3617c500a62e7bba3b3533',
        'placement=B07N3GRVGS&asins=B07N3GRVGS&linkId=8b914aae377a4234fa2be64e82bb121c',
        'placement=B09BGSY58L&asins=B09BGSY58L&linkId=2c2ace9d7c053538efb00035b10ad263',
        'placement=B01MF7EFYB&asins=B01MF7EFYB&linkId=6f7733222ab8cd0a76f89190b1e7aff5',
        'placement=B09BB74CLW&asins=B09BB74CLW&linkId=03fe8bdb258c95b0d5b9c7baeb8ed236',
        'placement=B09B82LJ21&asins=B09B82LJ21&linkId=5ffd998f4a8e62673498757386ba997b',
    ]

    const gitCard = [
        'placement=B006PJHP62&asins=B006PJHP62&linkId=b356aef078239d374daf7a573cd24167',
        'placement=B00GOLGXK0&asins=B00GOLGXK0&linkId=6e702b9c906fd444739f076bf78de27a'
    ]

    const luggage = [
        'placement=B0133APKFI&asins=B0133APKFI&linkId=366270173c626133a56fea919bbee178',
        'placement=B01MRZC1OM&asins=B01MRZC1OM&linkId=da2d1c4ceb4ed36482ed698d74f17e80',
        'placement=B07H5RMC5Z&asins=B07H5RMC5Z&linkId=f23de3cc6e14f9d2c3383114304655bd',
    ]

    return (
        <div className='main-container review-container prime-day' >

            <div className='container-description caption'>
                <img src={primeimg} alt='prime day' />
                <div>
                    <div className='big-font-shadow '>
                        My Handpicked Amazon Prime Day Deals.<br></br>
                        <span className='' style={{ color: "red" }}>Click "Shop now" to see deal prices, </span>
                        <span className='blink_me' style={{ color: "red" }}>Valid till <b>July-13-2022</b></span>
                    </div>
                </div>
            </div>



            <div className='inner-container '>

                <div className='simple-card'>
                    <header>Smart Watches</header>
                    <section>
                        {wearable.map((src, index) => (
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], duration: 2 }}>
                                <iframe title={index} key={index}
                                    className='amazon-iframe my-review-card'
                                    sandbox="allow-popups 
                                        allow-scripts 
                                        allow-modals 
                                        allow-forms 
                                        allow-same-origin"
                                    src={generateIframeUrl(src)}>
                                </iframe>
                            </motion.div>
                        ))}
                    </section>
                </div>

                <div className='simple-card'>
                    <header>Apple Products (Prime day or other deal)</header>
                    <section>
                        {appleDeals.map((src, index) => (
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], duration: 2 }}>
                                <iframe title={index} key={index}
                                    className='amazon-iframe my-review-card'
                                    sandbox="allow-popups 
                                        allow-scripts 
                                        allow-modals 
                                        allow-forms 
                                        allow-same-origin"
                                    src={generateIframeUrl(src)}>
                                </iframe>
                            </motion.div>
                        ))}
                    </section>
                </div>

                <div className='simple-card'>
                    <header>Audio</header>
                    <section>
                        <div className='simple-card'>
                            <header>Wireless Earbuds</header>
                            <section>
                                {earbuds.map((src, index) => (
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], duration: 2 }}>
                                        <iframe title={index} key={index}
                                            className='amazon-iframe my-review-card'
                                            sandbox="allow-popups 
                                        allow-scripts 
                                        allow-modals 
                                        allow-forms 
                                        allow-same-origin"
                                            src={generateIframeUrl(src)}>
                                        </iframe>
                                    </motion.div>
                                ))}
                            </section>
                        </div>
                        <div className='simple-card'>
                            <header>Bluetooth Speakers</header>
                            <section>
                                {speaker.map((src, index) => (
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], duration: 2 }}>
                                        <iframe title={index} key={index}
                                            className='amazon-iframe my-review-card'
                                            sandbox="allow-popups 
                                        allow-scripts 
                                        allow-modals 
                                        allow-forms 
                                        allow-same-origin"
                                            src={generateIframeUrl(src)}>
                                        </iframe>
                                    </motion.div>
                                ))}
                            </section>
                        </div>
                        <div className='simple-card'>
                            <header>Wireless Headphones</header>
                            <section>
                                {headphone.map((src, index) => (
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], duration: 2 }}>
                                        <iframe title={index} key={index}
                                            className='amazon-iframe my-review-card'
                                            sandbox="allow-popups 
                                        allow-scripts 
                                        allow-modals 
                                        allow-forms 
                                        allow-same-origin"
                                            src={generateIframeUrl(src)}>
                                        </iframe>
                                    </motion.div>
                                ))}
                            </section>
                        </div>
                    </section>
                </div>

                <div className='simple-card'>
                    <header>Smart Home</header>
                    <section>

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
                                            src={generateIframeUrl(src)}>
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
                                            src={generateIframeUrl(src)}>
                                        </iframe>
                                    </motion.div>
                                ))}
                            </section>
                        </div>
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
                                            src={generateIframeUrl(src)}>
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
                                    src={generateIframeUrl(src)}>
                                </iframe>
                            </motion.div>
                        ))}
                    </section>
                </div>

                <div className='simple-card'>
                    <header>Electronic Accesories</header>
                    <section>
                        {electronicAcccessories.map((src, index) => (
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], duration: 2 }}>
                                <iframe title={index} key={index}
                                    className='amazon-iframe my-review-card'
                                    sandbox="allow-popups 
                                        allow-scripts 
                                        allow-modals 
                                        allow-forms 
                                        allow-same-origin"
                                    src={generateIframeUrl(src)}>
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
                                    src={generateIframeUrl(src)}>
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
                                    src={generateIframeUrl(src)}>
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
                                    src={generateIframeUrl(src)}>
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