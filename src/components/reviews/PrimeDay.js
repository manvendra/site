import React from 'react'
import { motion } from 'framer-motion'
import './ReviewCard.css'
import Masonry from 'react-masonry-css'
import primeimg from '../../images/primeday.png'
import AmazonAd from './AmazonAd'


function PrimeDay() {

    const watchesWomen = [
        { link: 'placement=B00PXVUTYS&asins=B00PXVUTYS&linkId=721a80e6291ffb35d9d88e6e8100a06b', price: 141 },
        { link: 'placement=B016R92CE4&asins=B016R92CE4&linkId=72aa9e3a38be945f4e1619fdf29115ae', price: 170 },

        { link: 'placement=B0019KBDOM&asins=B0019KBDOM&linkId=e2ac1540faf77d2185da42e2754e0ea7', price: 171 },
        { link: 'placement=B07CGFM467&asins=B07CGFM467&linkId=004ec9b119713ec1d104b890e59fdb0e', price: 262 },
    ]

    const watchesMen = [

        { link: 'placement=B0B9146LHG&asins=B0B9146LHG&linkId=d046a64340882ce010f7e68f48fc9896', price: 170 },

        { link: 'placement=B08NTN1D2R&asins=B08NTN1D2R&linkId=429095064a9c5b05c5318983d7be2fea', price: 208 },
        { link: 'placement=B00PXVTMCI&asins=B00PXVTMCI&linkId=4060e9f92a5cdceeb3b6987286c1aa07', price: 213 },
        { link: 'placement=B07P4GWRKY&asins=B07P4GWRKY&linkId=5f91fabb1e8bf42759388d8dc773ed51', price: 220 },
        { link: 'placement=B00DBUVKP0&asins=B00DBUVKP0&linkId=7e7d37138d15ac37d665b36de6eeb931', price: 284 },
        { link: 'placement=B07CGHSWL5&asins=B07CGHSWL5&linkId=c54ad9e1e6d425145c15f1661ad91edf', price: 293 },

        { link: 'placement=B008RNKIV8&asins=B008RNKIV8&linkId=98f4c1c089e35e74d31cd34eb76713cf', price: 329 },
        { link: 'placement=B00PXVU3JO&asins=B00PXVU3JO&linkId=10f9a0ea7c0a8946838479c86f30e444', price: 340 },
        { link: 'placement=B07G2G7CYW&asins=B07G2G7CYW&linkId=cd3aeb4c38addfc33e85d4cc04f5a0ea', price: 422 },
    ]
    const appleDeals = [
        { link: 'placement=B07PXGQC1Q&asins=B07PXGQC1Q&linkId=9cd57a1e9d73df236de567c42af264ef', price: 89 },
        { link: 'placement=B0BDHB9Y8H&asins=B0BDHB9Y8H&linkId=49a5d9af3b7164901ea33b6769d8dbbb', price: 139 },

        {
            link: 'placement=B0BDHWCKLX&asins=B0BDHWCKLX&linkId=a155661c26cf936e31e2a59a3076ac22', price: 199
        },
        { link: 'placement=B0BDJBG74R&asins=B0BDJBG74R&linkId=5feca4ec9a5b2b92cc3b7da99684c5ca', price: 279 },
        { link: 'placement=B0BDHX1TKB&asins=B0BDHX1TKB&linkId=fe597398386b35c2dc952e6cc20c23ca', price: 579 },

        { link: 'placement=B0BJLT98Q7&asins=B0BJLT98Q7&linkId=a9b2497ee58cab447db907bdb7597dbf', price: 379 },

        { link: 'placement=B09G91LXFP&asins=B09G91LXFP&linkId=35d71f2746bfc34b42d14b7ead30dcff', price: 379 },
    ]

    const headphone = [
        { link: 'placement=B07YVYZ8T5&asins=B07YVYZ8T5&linkId=62979e367dee5d3745bfc67cb81a039c', price: 129 },
        { link: 'placement=B08528YFM3&asins=B08528YFM3&linkId=a28573af3981cf883a994588b5c67b38', price: 159 },

        { link: 'placement=B0B7KCP6SL&asins=B0B7KCP6SL&linkId=5299a6e500ea982c5cfa68fd08581634', price: 199 },
        // {
        //     link: 'placement=B098FH5P3C&asins=B098FH5P3C&linkId=5e09b9f827166bf59ce86a0643dca9a7',
        //     price: 199
        // },

        { link: 'placement=B0863FR3S9&asins=B0863FR3S9&linkId=dac58d30741d4287ccd6c6fc4d2e9de1', price: 249 },
        { link: 'placement=B07Q4QK379&asins=B07Q4QK379&linkId=fd6bb968ec758bb2dea39a6a07b0cfda', price: 299 },
    ]
    const earbuds = [
        { link: 'placement=B07PXGQC1Q&asins=B07PXGQC1Q&linkId=9cd57a1e9d73df236de567c42af264ef', price: 89 },
        { link: 'placement=B09VWH36DH&asins=B09VWH36DH&linkId=1e4c0c3cec7e7530ad1b5aa2a9aacafb', price: 89 },
        { link: 'placement=B0BYPGGDZX&asins=B0BYPGGDZX&linkId=1b9b98a9381737ec20c1fd7e17acf23b', price: 98 },
        { link: 'placement=B0BDHB9Y8H&asins=B0BDHB9Y8H&linkId=49a5d9af3b7164901ea33b6769d8dbbb', price: 139 },
        { link: 'placement=B0BS1VXF6K&asins=B0BS1VXF6K&linkId=a4fe82dea45c0bfafe67362180d6a61d', price: 239 },
    ]



    const powerBankAndWire = [
        { link: 'placement=B07215381G&asins=B07215381G&linkId=d0872d5dbf339279bd3a497e1ee3012d', price: 12 },
        { link: 'placement=B0BWJ87T9P&asins=B0BWJ87T9P&linkId=732e5a7100cff3ea386f4cde4802ca5c', price: 15 },

        { link: 'placement=B09KZFGGMT&asins=B09KZFGGMT&linkId=a13e4e3309676e3e8056e285014b0b19', price: 19 },
        { link: 'placement=B09VPHVT2Z&asins=B09VPHVT2Z&linkId=0be8f8cffc28a7c8d0a8c24df1f257e3', price: 99 },

        { link: 'placement=B09FF46FQ9&asins=B09FF46FQ9&linkId=8d36adaf5675eb1883ff8c78feb95c08', price: 186 },

    ]
    const macIpadAccessories = [

        { link: 'placement=B07ZVKTP53&asins=B07ZVKTP53&linkId=37e23fa7770fa641d0a58c4cf92ebaf7', price: 25 },
        { link: 'placement=B09XDZKH5P&asins=B09XDZKH5P&linkId=2d575864c63149a437c8d1dad9cf8006', price: 34 },
        { link: 'placement=B08NJ8CWCS&asins=B08NJ8CWCS&linkId=76f6da9f9afa7f3729ce0f00ce92e07d', price: 51 },
        { link: 'placement=B08NDGD2V5&asins=B08NDGD2V5&linkId=ece8b9f41bd493b8c8224935fe677464', price: 55 },
        { link: 'placement=B09MF6TJLW&asins=B09MF6TJLW&linkId=3bb290923a1549137b8869ca43a6e96f', price: 69 },
    ]
    const otherElectronics = [

        { link: 'placement=B07B8W2KHZ&asins=B07B8W2KHZ&linkId=7d5f493195add31d3038f2794909b4c7', price: 12 },
        { link: 'placement=B09PGXWNWG&asins=B09PGXWNWG&linkId=1844d8a97afd0c28f700da9010031353', price: 14 },


        { link: 'placement=B086HCFTTH&asins=B086HCFTTH&linkId=ff3e0c1e994d881049d02484bf3782ea', price: 58 },
        { link: 'placement=B0B3PSRHHN&asins=B0B3PSRHHN&linkId=ded7356797c486408a93d6eae9e3f389', price: 249 },
        { link: 'placement=B0BBJDF1TH&asins=B0BBJDF1TH&linkId=2a14fdf4faf0d2c040c407dc37c29159', price: 299 }

    ]
    const miscellaneousDeals = [
        {
            link: 'placement=B004XANKVO&asins=B004XANKVO&linkId=a827364b5057eb579f515f7970ad9619',
            price: 90
        }
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
                        <span className=''>Click <b>"Shop now"</b> to get prime deal price. Valid until </span>
                        <span className='' style={{ color: "red" }}><b>  July-12-2023</b></span>
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



                <div className='simple-card'>
                    <header>Men Watches </header>
                    <section>
                        {watchesMen.map((src, index) => (
                            <AmazonAd
                                index={index} src={src.link} price={src.price}></AmazonAd>
                        ))}
                    </section>
                </div>

                <div className='simple-card'>
                    <header>Women Watches </header>
                    <section>
                        {watchesWomen.map((src, index) => (
                            <AmazonAd
                                index={index} src={src.link} price={src.price}></AmazonAd>
                        ))}
                    </section>
                </div>


                <div className='simple-card'>
                    <header>Mac & iPad hubs</header>
                    <section>
                        {macIpadAccessories.map((src, index) => (
                            <AmazonAd
                                index={index} src={src.link} price={src.price}></AmazonAd>
                        ))}
                    </section>
                </div>
                <div className='simple-card'>
                    <header>Powerbanks & charging</header>
                    <section>
                        {powerBankAndWire.map((src, index) => (
                            <AmazonAd
                                index={index} src={src.link} price={src.price}></AmazonAd>
                        ))}
                    </section>
                </div>
                <div className='simple-card'>
                    <header> Other Electronics</header>
                    <section>
                        {otherElectronics.map((src, index) => (
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
            </div>
        </div>
    )
}

export default PrimeDay;