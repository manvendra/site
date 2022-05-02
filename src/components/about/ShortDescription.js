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
            <br /><br />
            <ul>

                <li>In last 16 years, I've worked on many enterprises scale solutions
                    for different clients spanning across Finance, Automotive, Healthcare & Travel Business domains.</li>
                <li>
                    I've mostly worked on Architecting, Designing & Developing Backend systems.
                    In recent few years,
                    I've worked on many Greenfield and Brownfield projects
                    for Cloud based solutions 
                    using AWS, PCF, K8S, Docker, SpringBoot, Kafka, ELK Stack, Cassandra 
                    and few more fancy names.
                </li>

                <li>I wouldn't call myself a front-end developer or designer.
                    My UI skills limited to the level of this highly responsive but very archaic website.
                    I'm guilty of designing it myself, using only HTML5 & CSS3.
                    I can also be blamed for all the UI code, done in simple React JS</li>
            </ul>
        <br/>
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