import React from 'react';

import loader from '../../images/loader.gif';

function Loader({classes,...props}) {        
    return (
        <div className={props.loaderClass} style={{display:props.display}}>
            <img src={loader} className={props.spinnerImg} alt="Loader" />
        </div>
    )
}

export default Loader;
