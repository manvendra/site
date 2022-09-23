import React from 'react'
import './Apple.css'
import AmazonAd from './AmazonAd'
import appleLogo from '../../images/apple_logo.png'

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


function Apple() {

    const tabsData = {
        items: [
            {
            heading: 'iPhones',
            items: [
                {
                    heading: 'iphone 14 Pro',
                    items: [{
                        heading: 'Screen Protector',
                        data: [
                            'placement=B0B244R4KB&asins=B0B244R4KB&linkId=cb8d94b8db4da7453b177e49e208503d'
                        ]
                    },
                    {
                        heading: 'Transparent Cases',
                        data: [
                            'placement=B0B1PH3JLZ&asins=B0B1PH3JLZ&linkId=c778653b6957c79e1147af396a04f626',
                            'placement=B0B1PD5WKK&asins=B0B1PD5WKK&linkId=21887a882dd0a0019bd98c928ee4eb98',
                            'placement=B0B1PG8T4S&asins=B0B1PG8T4S&linkId=0306ac7f4b0140b3559e33512a3b28d8',
                            'placement=B0B1P32F4D&asins=B0B1P32F4D&linkId=6637eb6e27a02cd662d1feb749c7ad08',
                            'placement=B0BDJBR9SJ&asins=B0BDJBR9SJ&linkId=44352835ffadc5517be903ef9fc3d93e',
                        ]
                    },
                    {
                        heading: 'Solid Cases',
                        data: [
                            'placement=B0B1P24DWL&asins=B0B1P24DWL&linkId=ba0781b33ccf13563a046accfb9183eb',
                            'placement=B0B1PFV1DD&asins=B0B1PFV1DD&linkId=ceb72be1c995ac89a38c1d20792e0ad2',
                            'placement=B0B1NRHF47&asins=B0B1NRHF47&linkId=a609d2eac977e61256b34150e3d3627c',
                            // 'placement=B0B1PGPLJ5&asins=B0B1PGPLJ5&linkId=0bfe3c2946ba18971be0536aadfbeeaa',
                            'placement=B0BDJF643J&asins=B0BDJF643J&linkId=36f97aede711d08659569f4b5d7fad4b'
                        ]
                    }
                    ]
                },
                {
                    heading: 'iphone 14',
                    items: [{
                        heading: 'Screen Protector',
                        data: [
                            'placement=B0B244R4KB&asins=B0B244R4KB&linkId=cb8d94b8db4da7453b177e49e208503d'
                        ]
                    },
                    {
                        heading: 'Transparent Cases',
                        data: [
                            'placement=B085WTWYS4&asins=B085WTWYS4&linkId=fcf8a610fc8bea381c317995b408fa40',
                            'placement=B08CJP6V6W&asins=B08CJP6V6W&linkId=d9242247b63414daa103de8ad590b5a1',
                            'placement=B09YL76VSR&asins=B09YL76VSR&linkId=2f487ed5b876c3aac272d653d58fc31a',
                            'placement=B094C4VDJZ&asins=B094C4VDJZ&linkId=f733eb8fb01c3d734775812902f4f861',
                            'placement=B096SSCV5K&asins=B096SSCV5K&linkId=49b09ae1cf0c9e61526d285deda707c0',
                        ]
                    },
                    {
                        heading: 'Solid Cases',
                        data: [
                            'placement=B0B1P24DWL&asins=B0B1P24DWL&linkId=ba0781b33ccf13563a046accfb9183eb',
                            'placement=B0B1PFV1DD&asins=B0B1PFV1DD&linkId=ceb72be1c995ac89a38c1d20792e0ad2',
                            'placement=B0B1NRHF47&asins=B0B1NRHF47&linkId=a609d2eac977e61256b34150e3d3627c',
                            // 'placement=B0B1PGPLJ5&asins=B0B1PGPLJ5&linkId=0bfe3c2946ba18971be0536aadfbeeaa',
                            'placement=B0BDJF643J&asins=B0BDJF643J&linkId=36f97aede711d08659569f4b5d7fad4b'
                        ]
                    }
                    ]
                },
                {
                    heading: 'iphone 13 Pro',
                    items: [{
                        heading: 'Screen Protector',
                        data: [
                            'placement=B0B244R4KB&asins=B0B244R4KB&linkId=cb8d94b8db4da7453b177e49e208503d'
                        ]
                    },
                    {
                        heading: 'Clear Cases',
                        data: [
                            'placement=B09G9B9WH5&asins=B09G9B9WH5&linkId=64fae08658c6d590320e21637519da77',
                            'placement=B09G8YSGPR&asins=B09G8YSGPR&linkId=685d36e1feb8536accba17280b7d2310',
                            'placement=B08M5TJPXY&asins=B08M5TJPXY&linkId=fd5b0736b10a668dba9946ef1df81419',
                        ]
                    },
                    {
                        heading: 'Solid Cases',
                        data: [
                            'placement=B0B1P24DWL&asins=B0B1P24DWL&linkId=ba0781b33ccf13563a046accfb9183eb',
                            'placement=B0B1PFV1DD&asins=B0B1PFV1DD&linkId=ceb72be1c995ac89a38c1d20792e0ad2',
                            'placement=B0B1NRHF47&asins=B0B1NRHF47&linkId=a609d2eac977e61256b34150e3d3627c',
                            // 'placement=B0B1PGPLJ5&asins=B0B1PGPLJ5&linkId=0bfe3c2946ba18971be0536aadfbeeaa',
                            'placement=B0BDJF643J&asins=B0BDJF643J&linkId=36f97aede711d08659569f4b5d7fad4b'
                        ]
                    }
                    ]
                },
            ]
        },
        {
            heading: 'Mac',
            items: [
                { heading: 'MacBook M1 13', data: ["some random data"] },
                { heading: 'MacBook M1 13', data: ["some random data"] }
            ]
        },
        {
            heading: 'iPad',
            items: [
                { heading: 'iPad 2019', data: ["some random data"] },
                { heading: 'Ipad Pro', data: ["some random data"] }
            ]
        }
        ]

    }

    return (


        <div className='main-container apple' >

            <div className='container-description caption1'>
                <img src={appleLogo} alt='apple' />
                <span> My Handpicked products for "All things Apple".
                </span>
            </div>

            <div className='inner-container'>
{/** Right now I need to put ad on today, so I'm writing code just with the loop but this can be  solved better with recursion */}
                <Tabs forceRenderTabPanel defaultIndex={0}>
                    <TabList>
                        {tabsData.items?.map((product) => (
                            <Tab>{product?.heading}</Tab>
                        ))}
                    </TabList>
                    {tabsData.items?.map((product) => (
                        <TabPanel>
                            <Tabs forceRenderTabPanel  defaultIndex={0}>
                                <TabList>
                                    {product?.items?.map((model) => (
                                        <Tab>{model?.heading}</Tab>
                                    ))}
                                </TabList>
                                {product?.items?.map((model) => (
                                    <TabPanel>
                                        <Tabs forceRenderTabPanel>
                                            <TabList>
                                                {model?.items?.map((category) => (
                                                    <Tab>{category?.heading}</Tab>
                                                ))}
                                            </TabList>
                                            {model?.items?.map((category) => (
                                                <TabPanel>
                                                    {category?.data?.map((src, index) => (
                                                        <AmazonAd
                                                            index={index} src={src}>
                                                        </AmazonAd>
                                                    ))}
                                                </TabPanel>
                                            ))}
                                        </Tabs>
                                    </TabPanel>
                                ))}
                            </Tabs>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    )
}

export default Apple