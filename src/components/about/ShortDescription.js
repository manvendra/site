import React from 'react'
import client1 from '../../images/clients/exprs-scrpt.svg';
import client2 from '../../images/clients/bmw.svg';
import client3 from '../../images/clients/comcast.svg';
import client4 from '../../images/clients/usbank.svg';
import client5 from '../../images/clients/intertek.svg';

function ShortDescription() {
    return (
        <p>
            <ul>
                <li>I've over 15 years of experience building large scale solutions for big enterprises.</li>
                <li>I've worked in different business domain. Finance, Automotive, Healthcare & Travel to name a few</li>
                <li>I specialize in <b> Backend </b> Architecture, Design & Development.</li>
                <li>For few recent years I've been working with clients
                    to develop new solutions using Cloud architecture or just migrating their existing systems on Cloud,
                    using AWS, PCF, K8S, Docker, SpringBoot, Kafka, ELK Stack, Cassandra and few more fancy names.
                </li>
                <li>I wouldn't call myself a front-end developer or designer.
                    My expertise end at the level of this highly responsive but archaic website,
                    which I'm guilty of designing myself without any Ui library,
                    using only  HTML5 & CSS3 .
                    Oh and yes you can blame me for UI code defects too, done in primitive <b>React JS</b></li>
            </ul>
            <br />
            Here some clients I worked for decent tenure
            <div>
                <img className='client-logo-l' src={client1} alt='client' />
                <img className='client-logo-s' src={client2} alt='client' />
                <img className='client-logo-m' src={client3} alt='client' />
                <img className='client-logo-s' src={client5} alt='client' />
                <img className='client-logo-m' src={client4} alt='client' />
            </div>
        </p>
    )
}

export default ShortDescription