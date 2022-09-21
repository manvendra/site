
   export  const generateIframeUrl = (identifier) => {
        const amazonUrl = '//ws-na.amazon-adsystem.com/widgets/q';
        const standardParams = 'ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til';
        const linkingParam = 'ad_type=product_link&tracking_id=mps024-20&language=en_US&marketplace=amazon&region=US';
        const displayParam = 'show_border=true&link_opens_in_new_window=true';

        return `${amazonUrl}?${standardParams}&${linkingParam}&${identifier}&${displayParam}`;
 }