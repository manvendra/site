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
                    I've worked on various enterprise-scale solutions for different clients,
                    spanning across Finance, Automotive, Healthcare, Products & Travel domains. Fifteen years and counting.
                </li>
                <li>
                    Usually I'm the culprit behind the architectural & design flaws of backend systems.
                    And most of the time, if not always, the contributor of the highest number of code defects.
                </li>
                <li>
                    In the last 5-6 years,
                    I've tried to not harm various cloud-based Greenfield and Brownfield projects
                    by using AWS, PCF, K8S, Docker, SpringBoot, Kafka, ELK Stack, Cassandra,
                    and a few more fancy names.
                </li>

                <li>
                    I wouldn't call myself a front-end developer or designer, but I do have some UI tricks up my sleeves. <br />
                    However, those are limited to the level of this very archaic but highly responsive website.
                    I hold the blame for designing every single pixel here, and guilty of writing each line of ui code using reactJS.
                </li>
            </ul>
            <br />
            <h5> Some prominent victims of my work:</h5>
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