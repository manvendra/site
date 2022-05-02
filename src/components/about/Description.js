import React from 'react'
import ShortDescription from './ShortDescription';
import LongDescription from './LongDescription';
import UnderConstruction from '../../images/ndr-cnstrshn.svg'

function Description() {
    return (
        <>
            <h3>about me</h3>
            <div className='self-summary'>
                <div className="tabs">
                    <input type="radio" id="tab1" defaultChecked name="tabs" />
                    <label for="tab1">Short Version</label>
                    <div className="tab"><ShortDescription /></div>

                    <input type="radio" id="tab2" name="tabs" />
                    <label for="tab2">Long Version</label>
                    <div className="tab ">
                        <div className='center'>
                            <img src={UnderConstruction} alt="Under construction" className='img-xl' />
                            <h4> Under Construction !</h4>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Description