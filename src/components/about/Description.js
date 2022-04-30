import React from 'react'
import ShortDescription from './ShortDescription';
import LongDescription from './LongDescription';
function Description() {
    return (
        <>
            <h3>about me</h3>
            <div className='self-summary'>
                <div class="tabs">
                    <input type="radio" id="tab1" checked='checked' name="tabs" />
                    <label for="tab1">Short Version</label>
                    <div class="tab"><ShortDescription /></div>

                    <input type="radio" id="tab2" name="tabs" />
                    <label for="tab2">Long Version</label>
                    <div class="tab">Under Construction !</div>
                </div>

            </div>
        </>
    )
}

export default Description