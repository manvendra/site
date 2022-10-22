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
                            'placement=B095RTJH1M&asins=B095RTJH1M&linkId=b049a4ea7dd53e51cee02f16170ce36e'
                        ]
                    },
                    {
                        heading: 'Transparent Cases',
                        data: [
                            'placement=B0BDJBR9SJ&asins=B0BDJBR9SJ&linkId=f8ee844138603f57f304e3c074ced901',
                            'placement=B0B9NWG4KX&asins=B0B9NWG4KX&linkId=61ddcde7575b194a9d82d37d58d6b008',
                            'placement=B0B1NTZMK6&asins=B0B1NTZMK6&linkId=1214a36b9cd2a60af550464829146bec',                      
                            'placement=B0B1P7Z2GQ&asins=B0B1P7Z2GQ&linkId=daa9fec3963171e6c18448acaca058ee',
                            'placement=B0B1P3MY66&asins=B0B1P3MY66&linkId=d6d48a9980c912494b465959890f564c',
                            'placement=B0B5TQ2SV6&asins=B0B5TQ2SV6&linkId=e7ce3efd895d313ee1d274d201488f42'

                        ]
                    },
                    {
                        heading: 'Solid Cases',
                        data: [
                            'placement=B0BDHTSJ2Z&asins=B0BDHTSJ2Z&linkId=be69ff88f75edf059f9509bc4b2544a7',
                            'placement=B0BDJ8M4R4&asins=B0BDJ8M4R4&linkId=00038411dfe4b51fff7d117823f3de1a',
                            'placement=B0B1NWDPN5&asins=B0B1NWDPN5&linkId=6e597b11f4bb41d707d24b2cad19afd7',
                            'placement=B0B1NTJWSS&asins=B0B1NTJWSS&linkId=0291d8634dfb02d3ad32bc2013739c8d',
                            'placement=B0B1PJ2QPL&asins=B0B1PJ2QPL&linkId=544d514b72f50a1b58c0aa680dee32ff'
                         
                        ]
                    }
                    ]
                },
                {
                    heading: 'iphone 13 Pro',
                    items: [{
                        heading: 'Screen Protector',
                        data: [
                            'placement=B0B244R4KB&asins=B0B244R4KB&linkId=cb8d94b8db4da7453b177e49e208503d',
                         
                        ]
                    },
                    {
                        heading: 'Clear Cases',
                        data: [
                            'placement=B09G9B9WH5&asins=B09G9B9WH5&linkId=64fae08658c6d590320e21637519da77',
                        ]
                    },
                    {
                        heading: 'Solid Cases',
                        data: [
                            'placement=B09G8S927G&asins=B09G8S927G&linkId=f602a313a1c571818cdd3b2f33b3e0a6',
                            'placement=B09G7FSHV5&asins=B09G7FSHV5&linkId=bc65d8871036e196903f4cca7061d6a6',
                            'placement=B09G8WTNVR&asins=B09G8WTNVR&linkId=f470a5fb94f03c5c334d7e6c11a95b03'
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