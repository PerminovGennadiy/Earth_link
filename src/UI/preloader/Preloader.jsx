import React from "react";
import preloader from '../../assets/svg/preloader.svg';

let Preloader = (props) => {
    return (
        <div style={{ width: '70px', height: '70px', position: 'absolute' }} ><img src={preloader} /></div>
    );
};

export default Preloader;