import React from 'react'
import { motion } from 'framer-motion'
import './ReviewCard.css'
import Masonry from 'react-masonry-css'
import primeimg from '../../images/primeday.png'
import AmazonAd from './AmazonAd'


function PrimeDay() {

    const jackets = [
        {
            link: 'placement=B07G4GDMRP&asins=B07G4GDMRP&linkId=91df4145a81b54b4f52e10a22422370e',
            price: 34
        },
        {
            link: 'placement=B08HLLHVS3&asins=B08HLLHVS3&linkId=7172ef8f9ff9565e647f96c2c852d487',
            price: 27
        },
        {
            link: 'placement=B08K3L8BS2&asins=B08K3L8BS2&linkId=addd93c22e0eb0a6a44a078371aa7e1c',
            price: 34
        }
    ]


    const appleDeals = [
        {
            link: 'placement=B0BDHWDR12&asins=B0BDHWDR12&linkId=9d63962a810de1a2fc278f0136bfa877',
            price: 223
        },
        {
            link: 'placement=B0BDHWDR12&asins=B0BDHWDR12&linkId=a0c56b22e287d90993a161e1554346b0',
            price: 239
        },
        {
            link: 'placement=B0BDHB9Y8H&asins=B0BDHB9Y8H&linkId=e7b6f5ba1c4b75a8fe20d6b146e93376',
            price: 169
        },
        {
            link: 'placement=B0BDHM49BJ&asins=B0BDHM49BJ&linkId=00b32322df2e2fab46efe3bb1ca8495d',
            price: 349
        },
        {
            link: 'placement=B0BDJ1MVBV&asins=B0BDJ1MVBV&linkId=e5ba0f5db03019917297cc437949135e',
            price: 249
        },
        {
            link: 'placement=B09G96SSLB&asins=B09G96SSLB&linkId=26cf49b6261045e00e0ebedbb7ed5cf2',
            price: 189
        },
        {
            link: 'placement=B0932PL9BF&asins=B0932PL9BF&linkId=6aed325d2d0390c719e45bc9b257fa9b'
            , price: 24
        },
        {
            link: 'placement=B0932NW1FH&asins=B0932NW1FH&linkId=a5288ef8e0edf34cacf1529d5f6988ff',
            price: 22
        },
        {
            link: 'placement=B09G9FPHY6&asins=B09G9FPHY6&linkId=5a9b8b2ba9053dab5365160d554ac24a',
            price: 299
        },
        {
            link: 'placement=B0B3BVWJ6Y&asins=B0B3BVWJ6Y&linkId=f6ec4f21bd58bc68cf36a4d8ba93262b',
            price: 1099
        },
        {
            link: 'placement=B08N5M7S6K&asins=B08N5M7S6K&linkId=53f36ef6fbc256d74112a42304ae754e',
            price: 799
        },
    ]

    const headphone = [
        {
            link: 'placement=B09CGB6VRR&asins=B09CGB6VRR&linkId=3244d4c69655d1d7fcb631401b81dabe',
            price: 198
        },
        {
            link: 'placement=B07YVYPNRD&asins=B07YVYPNRD&linkId=d841fa2332f8df026ab5de41ac722674',
            price: 99
        },
        {
            link: 'placement=B08528YFM2&asins=B08528YFM2&linkId=13ca34dbedd1a848b84e8b1b0f1e00f8',
            price: 169
        },
        {
            link: 'placement=B07Q4QK379&asins=B07Q4QK379&linkId=18f78cc01b4c0f2cc28387b1f9842e5a',
            price: 269
        },
        {
            link: 'placement=B098FKXT8L&asins=B098FKXT8L&linkId=9a9ee12723c8a69565fecfc544fdac23',
            price: 229
        },

        {
            link: 'placement=B08CYY2S3V&asins=B08CYY2S3V&linkId=18f07a1a3b991b3b6445e080ad6592b5',
            price: 149
        }
    ]
    const earbuds = [
        {
            link: 'placement=B0BDHWDR12&asins=B0BDHWDR12&linkId=9d63962a810de1a2fc278f0136bfa877',
            price: 223
        },
        {
            link: 'placement=B0BDHB9Y8H&asins=B0BDHB9Y8H&linkId=e7b6f5ba1c4b75a8fe20d6b146e93376',
            price: 169
        },
        {
            link: 'placement=B09YL76VSR&asins=B09YL76VSR&linkId=2f487ed5b876c3aac272d653d58fc31a',
            price: 128
        },
        {
            link: 'placement=B09VWH36DH&asins=B09VWH36DH&linkId=d23a8cdd564e6f5fdff0f1416cd640a7',
            price: 99
        },
    ]


    const otherDevices = [
        {
            link: 'placement=B0B3PSRHHN&asins=B0B3PSRHHN&linkId=ded7356797c486408a93d6eae9e3f389',
            price: 329
        },
        {
            link: 'placement=B0B52KQ34K&asins=B0B52KQ34K&linkId=8b5da1afd3962a8081895e9dfcf96a40',
            price: 349
        },

        {
            link: 'placement=B09F1RH8C5&asins=B09F1RH8C5&linkId=c03268d16cfb6026651e1f1662af5fc7',
            price: 349
        },
        {
            link: 'placement=B08J4C8871&asins=B08J4C8871&linkId=70698d1ae56fff941bc6edec1dfe5813',
            price: 349
        },

        {
            link: 'placement=B08ZNSL1DB&asins=B08ZNSL1DB&linkId=1afbdacb488c8a7aa4eafac0efd12174',
            price: 349
        },
        {
            link: 'placement=B091FXLMS8&asins=B091FXLMS8&linkId=4e7ba5e7a5a138921d634268a102d914',
            price: 349
        },
        {
            link: 'placement=B07B8W2KHZ&asins=B07B8W2KHZ&linkId=1b6649e738a30dff8264ab28cde9e688',
            price: 349
        },
        {
            link: 'placement=B091FXQQMQ&asins=B091FXQQMQ&linkId=06fcceb48af14cc32f00164eaccf7d70',
            price: 349
        },
    ]

    // const smallElectronics = [
    //     'placement=B07VTK654B&asins=B07VTK654B&linkId=4d67b25ab179a8cacb9279fb5460dfd3',
    //     'placement=B083TMWFSZ&asins=B083TMWFSZ&linkId=a37a44c30c7d58824ee3df96ba7086da',
    // ]

    const electronicAcccessories = [
        {
            link: 'placement=B0B3PSRHHN&asins=B0B3PSRHHN&linkId=ded7356797c486408a93d6eae9e3f389',
            price: 329
        },
        {
            link: 'placement=B09MJVXYMF&asins=B09MJVXYMF&linkId=7b5e3bd10fbad2e722b9a705b6dbea9c',
            price: 34
        },
        {
            link: 'placement=B07QXV6N1B&asins=B07QXV6N1B&linkId=e6905b372c0dca42d3a458d755938427',
            price: 15
        },
        {
            link: 'placement=B07XYY6Q34&asins=B07XYY6Q34&linkId=1b3916f20e2a57e8e53d3869a86e9d74',
            price: 13
        },

        {
            link: 'placement=B07DHM9JZW&asins=B07DHM9JZW&linkId=50e5ab56d0187749a0285365f22728da',
            price: 14
        },
        {
            link: 'placement=B07V5T11F1&asins=B07V5T11F1&linkId=ddf19d03f6c6e80943893f9ac6a55417',
            price: 23
        },
        {
            link: 'placement=B099F6LNSC&asins=B099F6LNSC&linkId=18e9ddc1cbd7a7227cfa4c651c598f44',
            price: 14
        },
        {
            link: 'placement=B099Z29R3Q&asins=B099Z29R3Q&linkId=9b2849d50cf57e732a1754128545298f',
            price: 37
        },
        {
            link: 'placement=B09PGXWNWG&asins=B09PGXWNWG&linkId=baaec501ac5c170ff0f89804b7729bd4',
            price: 14
        },
        {
            link: 'placement=B08YY9X1JV&asins=B08YY9X1JV&linkId=53300f8fd81e21c87bf9e6698026cbf6',
            price: 18
        },

    ]
    // const kitchen = [
    //     'placement=B08QZXFSKP&asins=B08QZXFSKP&linkId=3630458746b52352e7b5d58ed932e866',
    //     'placement=B09K6MK5VN&asins=B09K6MK5VN&linkId=4453c38993badd13bee312644d907e2d',
    //     'placement=B083248S3B&asins=B083248S3B&linkId=f849050d0ba195aa4633daecc676a49c',
    //     'placement=B078NN17K3&asins=B078NN17K3&linkId=9567b662dd3617c500a62e7bba3b3533',
    //     'placement=B07N3GRVGS&asins=B07N3GRVGS&linkId=8b914aae377a4234fa2be64e82bb121c',
    //     'placement=B09BGSY58L&asins=B09BGSY58L&linkId=2c2ace9d7c053538efb00035b10ad263',
    //     'placement=B01MF7EFYB&asins=B01MF7EFYB&linkId=6f7733222ab8cd0a76f89190b1e7aff5',
    //     'placement=B09BB74CLW&asins=B09BB74CLW&linkId=03fe8bdb258c95b0d5b9c7baeb8ed236',
    //     'placement=B09B82LJ21&asins=B09B82LJ21&linkId=5ffd998f4a8e62673498757386ba997b',
    // ]

    // const gitCard = [
    //     'placement=B006PJHP62&asins=B006PJHP62&linkId=b356aef078239d374daf7a573cd24167',
    //     'placement=B00GOLGXK0&asins=B00GOLGXK0&linkId=6e702b9c906fd444739f076bf78de27a'
    // ]

    // const luggage = [
    //     'placement=B0133APKFI&asins=B0133APKFI&linkId=366270173c626133a56fea919bbee178',
    //     'placement=B01MRZC1OM&asins=B01MRZC1OM&linkId=da2d1c4ceb4ed36482ed698d74f17e80',
    //     'placement=B07H5RMC5Z&asins=B07H5RMC5Z&linkId=f23de3cc6e14f9d2c3383114304655bd',
    // ]

    return (
        <div className='main-container review-container prime-day' >

            <div className='container-description caption'>
                <img src={primeimg} alt='prime day' />
                <div>
                    <div className='big-font-shadow '>
                        Amazon Prime Day Deals.<br></br>
                        <span className=''>Click <b>"Shop now"</b> for Deal Price</span>
                        &nbsp; <span className='blink_me' style={{ color: "red" }}><b> Valid till Oct-12-2022</b></span>
                    </div>
                </div>
            </div>



            <div className='inner-container '>



                <div className='simple-card'>
                    <header>Apple Products (Prime day or other deal)</header>
                    <section>
                        {appleDeals.map((src, index) => (
                            <AmazonAd
                                index={index} src={src.link} price={src.price}></AmazonAd>
                        ))}
                    </section>
                </div>

                <div className='simple-card'>
                    <header>Prime day Jackets </header>
                    <section>
                        {jackets.map((src, index) => (
                            <AmazonAd
                                index={index} src={src.link} price={src.price}></AmazonAd>
                        ))}
                    </section>
                </div>

                {/* <div className='simple-card'>
                    <header>Smart Watches</header>
                    <section>
                        {wearable.map((src, index) => (
                            <AmazonAd 
                            index={index} src={src}></AmazonAd>                    
                        ))}
                    </section>
                </div> */}


                <div className='simple-card'>
                    <header>Audio</header>
                    <section>
                        <div className='simple-card'>
                            <header>Wireless Earbuds</header>
                            <section>
                                {earbuds.map((src, index) => (
                                    <AmazonAd
                                        index={index} src={src.link} price={src.price}></AmazonAd>
                                ))}
                            </section>
                        </div>
                        {/* <div className='simple-card'>
                            <header>Bluetooth Speakers</header>
                            <section>
                                {speaker.map((src, index) => (
                                    <AmazonAd 
                            index={index} src={src}></AmazonAd>
                                ))}
                            </section>
                        </div> */}
                        <div className='simple-card'>
                            <header>Wireless Headphones</header>
                            <section>
                                {headphone.map((src, index) => (
                                    <AmazonAd
                                        index={index} src={src.link} price={src.price}></AmazonAd>
                                ))}
                            </section>
                        </div>
                    </section>
                </div>

                <div className='simple-card'>
                    <header>Other Electronics</header>
                    <section>
                        {electronicAcccessories.map((src, index) => (
                            <AmazonAd
                                index={index} src={src.link} price={src.price}></AmazonAd>
                        ))}
                    </section>
                </div>

                {/* <div className='simple-card'>
                    <header>Smart Home</header>
                    <section>

                        <div className='simple-card'>
                            <header>Lights</header>
                            <section>
                                {lights.map((src, index) => (
                                    <AmazonAd 
                            index={index} src={src}></AmazonAd>
                                ))}
                            </section>
                        </div>

                        <div className='simple-card'>
                            <header>Smart plugs and other devices</header>
                            <section>
                                {otherDevices.map((src, index) => (
                                    <AmazonAd 
                            index={index} src={src}></AmazonAd>
                                ))}
                            </section>
                        </div>
                        <div className='simple-card'>
                            <header>Security Cameras</header>
                            <section>
                                {cameras.map((src, index) => (
                                    <AmazonAd 
                            index={index} src={src}></AmazonAd>
                                ))}
                            </section>
                        </div>
                    </section>
                </div> */}


                {/* <div className='simple-card'>
                    <header>Small Electronics</header>
                    <section>
                        {smallElectronics.map((src, index) => (
                            <AmazonAd 
                            index={index} src={src}></AmazonAd>
                        ))}
                    </section>
                </div> */}



                {/* <div className='simple-card'>
                    <header>Kitchen</header>
                    <section>
                        {kitchen.map((src, index) => (
                            <AmazonAd 
                            index={index} src={src}></AmazonAd>
                        ))}
                    </section>
                </div> */}

                {/* <div className='simple-card'>
                    <header>Luggage (Not everything on prime-day deal)</header>
                    <section>
                        {luggage.map((src, index) => (
                            <AmazonAd 
                            index={index} src={src}></AmazonAd>
                        ))}
                    </section>
                </div> */}

                {/* <div className='simple-card'>
                    <header>Gift Cards</header>
                    <section>
                        {gitCard.map((src, index) => (
                            <AmazonAd 
                            index={index} src={src}></AmazonAd>
                        ))}
                    </section>
                </div> */}

            </div>
        </div>
    )
}

export default PrimeDay;