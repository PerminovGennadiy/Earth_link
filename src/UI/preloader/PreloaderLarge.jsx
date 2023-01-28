import React from "react";
import preloader from '../../assets/svg/preloaderLarge.svg';

let PreloaderLarge = (props) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} ><img src={preloader} /></div>
    );
};

export default PreloaderLarge;