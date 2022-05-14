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
                    In last 16 years, I've worked on various enterprises scale solutions
                    for different clients spanning across Finance, Automotive, Healthcare & Travel domains.
                </li>
                <li>
                    Usually I'm the culprit of ruining the Architecture and Design of Backend systems.
                    And most of the time, if not always, the contributor of highest number of backend defects.
                    In recent few years,
                    I've worked on many cloud-architecture based Greenfield and Brownfield projects
                    using AWS, PCF, K8S, Docker, SpringBoot, Kafka, ELK Stack, Cassandra
                    and few more fancy names.
                </li>

                <li>
                    I can not call myself a front-end developer or designer based upon enterprise experience. 
                    But I do have some UI tricks up my sleeves.
                    However, those are limited to the level of this very archaic but highly responsive website.<br />
                    I'm guilty of designing it myself, without using any library, using only HTML5 & CSS3.
                    and I can also be blamed for all the UI code, which I did with React JS</li>
            </ul>
            <br />
            <h6> Some of the clients or companies I worked for:</h6>
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