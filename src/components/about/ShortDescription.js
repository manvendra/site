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
                Not a usual about-me section, Just an admission of guilt.  
            </div>
            <br />
            <ul>
                <li>
                    Over the past sixteen years, I have assumed diverse roles in developing enterprise-scale solutions for clients 
                    across  Finance, Automotive, Healthcare, Products, and Travel domains.
                </li>
                <li>
                    Usually, I'm the culprit behind the architectural & design flaws of backend systems.
                    And often being the contributor to the highest number of defects.
                </li>
                <li>
                    Throughout recent years, I have focused my efforts on both Greenfield and Brownfield projects, 
                    leveraging cloud-based technologies like AWS, PCF, K8S, Docker, SpringBoot, Kafka, ELK Stack, Cassandra, 
                    and other fancy names.
                </li>
                <li>
                    While I don't consider myself a front-end developer or designer, 
                    I do possess some UI skills that I apply to this very archaic but highly responsive website. 
                    I hold the blame for every aspect of the design, guilty of crafting each pixel and writing the UI code 
                    using reactJS and several supporting libraries.
                
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