import { motion } from 'framer-motion'
import  './AmazonAd.css'

const AmazonAd = (props) => {

  const { src, index } = props;

  const generateIframeUrl = (identifier) => {
    const amazonUrl = '//ws-na.amazon-adsystem.com/widgets/q';
    const standardParams = 'ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til';
    const linkingParam = 'ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US';
    const displayParam = 'show_border=true&link_opens_in_new_window=true';

    return `${amazonUrl}?${standardParams}&${linkingParam}&${identifier}&${displayParam}`;
  }

  return (
    <motion.div
      animate={{ scale: [1, 1.2, 1], duration: 3 }}>
      <iframe
        title={index}
        key={index}
        src={generateIframeUrl(src)}
        className='amazon-iframe my-review-card'
        sandbox="allow-popups 
                                   allow-scripts 
                                   allow-modals 
                                   allow-forms 
                                   allow-same-origin"
        style={ {width: '120px', height:'240px',border:'1px solid black'}} >
      </iframe>
    </motion.div>
  )
}
export default AmazonAd;
