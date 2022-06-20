import React from 'react'
import xpt from '../../images/clients/exprs-scrpt.svg';
import bmw from '../../images/clients/bmw.svg';
import cmcst from '../../images/clients/comcast.svg';
import ub from '../../images/clients/usbank.svg';
import itrtk from '../../images/clients/intertek.svg';
import zcs from '../../images/clients/zycus.svg';
import one from '../../images/clients/nsdl.svg';
import tc from '../../images/clients/tc.svg';

function ShortDescription() {
    return (
        <p>
            <div className='quote text-left'>
                Admission of guilt. Not a usual boastful about-me section
            </div>
            <br />
            <ul>
                <li>
                    In last 15 years, I've worked on various enterprise-scale solutions for different clients,
                    spanning across Finance, Automotive, Healthcare, Products & Travel domains.
                </li>
                <li>
                    I'm usually the culprit for ruining the architecture & design of backend systems.
                    And most of the time, if not always, the contributor of the highest number of code defects.
                </li>
                <li>
                    For the last few years,
                    I've been damaging various cloud-based Greenfield and Brownfield projects
                    using AWS, PCF, K8S, Docker, SpringBoot, Kafka, ELK Stack, Cassandra,
                    and a few more fancy names.
                </li>

                <li>
                    I wouldn't call myself a front-end developer or designer, but I do have some UI tricks up my sleeves. <br />
                    However, those are limited to the level of this very archaic but highly responsive website.
                    I hold the blame of independently designing and developing it, without using any ui library.
                </li>
            </ul>
            <br />
            <h5> Here are some victims of my works :</h5>
            <div className='clients'>
                <img className='img-l' src={tc} alt='client' />
                <img className='img-s' src={bmw} alt='client' />
                <img className='img-m' src={cmcst} alt='client' />
                <img className='img-s' src={one} alt='client' />
                <img className='img-l' src={xpt} alt='client' />
                <img className='img-s' src={itrtk} alt='client' />
                <img className='img-m' src={ub} alt='client' />
                <img className='img-m' src={zcs} alt='client' />
            </div>
        </p>
    )
}
export default ShortDescription