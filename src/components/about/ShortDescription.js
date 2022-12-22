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
                ( Admission of guilt )  Not a usual boastful about-me section
            </div>
            <br />
            <ul>
                <li>
                    In the last sixteen years, I've played many different roles to work on various enterprise-scale solutions for different clients,
                    spanning Finance, Automotive, Healthcare, Products & Travel domains.
                </li>
                <li>
                    Usually, I'm the culprit behind the architectural & design flaws of backend systems.
                    And most of the time, if not always, the contributor of the highest number of code defects.
                </li>
                <li>
                    For the last many years, I've been trying my spells on various Greenfield and Brownfield cloud-based projects, 
                    using AWS, PCF, K8S, Docker, SpringBoot, Kafka, ELK Stack, Cassandra, and a few more fancy names.
                </li>

                <li>
                    I can not call myself a front-end developer or designer, but I do have some UI tricks up my sleeves. <br />
                    However, those are limited to the level of this very archaic but highly responsive website.
                    I hold the blame for designing every single pixel here and am guilty of writing each line of ui code using reactJS and some libraries.
                </li>
            </ul>
            <br />
            <h4> Some prominent victims of my work:</h4>
            <div className='clients'>
                <img className='img-l' src={tc} alt='Thomas Cook' />
                <img className='img-s' src={bmw} alt='BMW' />
                <img className='img-m' src={cmcst} alt='Comcast' />
                <img className='img-s' src={one} alt='NSDL' />
                <img className='img-l' src={xpt} alt='Express Scripts' />
                <img className='img-s' src={itrtk} alt='Intertek' />
                <img className='img-m' src={ub} alt='U.S. Bank' />
                <img className='img-m' src={zcs} alt='Zycus' />
            </div>
        </p>
    )
}
export default ShortDescription