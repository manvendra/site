import React from 'react'

function Donate() {
    return (
        <div className='donate'>
            {/* <div className='paypal'>
                <form action="https://www.paypal.com/donate" method="post" target="_blank">
                    <input type="hidden" name="business" value="3N2V583ZR5LEN" />
                    <input type="hidden" name="no_recurring" value="1" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
                        border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div> */}
            <div className='buy-me-coffee'>
                <a href="https://www.buymeacoffee.com/manvendrasu"
                    target="_blank">
                    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                        alt="Buy Me A Coffee"  />
              </a>
            </div>
        </div>
    )
}

export default Donate