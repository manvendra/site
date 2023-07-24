import React from 'react'
import ReactWordcloud from 'react-wordcloud';
import '../common/style/word-cloud.css'

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

function WordCloud(props) {
    const { data } = props;

    const options = {
        enableTooltip: true,
        padding: 2,
        scale: "sqrt",
        spiral: "archimedean",
        transitionDuration: 1000
      };

      const callbacks = {
        getWordTooltip: (word) => word.text,
      };
    

    const prepareCloudData
        = (cloudLabels) => cloudLabels
            .map(label => (
                { 'text': label,
                   'value': Math.floor(Math.random() * 20) }
            ));

    return (
        <div className='simple-card word-cloud'>  
            <header >
                Topics discussed in these posts
            </header>  
            <ReactWordcloud
                words={prepareCloudData(data)}
                options={options}
                callbacks={callbacks}
                />
        </div>
    )
}

export default WordCloud