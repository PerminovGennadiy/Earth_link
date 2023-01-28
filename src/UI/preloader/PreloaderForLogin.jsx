import React from "react";
import preloader from '../../assets/svg/preloader.svg';

let Preloader = (props) => {
    return (
        <div style={{ width: '70px', height: '70px', position: 'absolute', right: '190px', top: '15px' }} ><img src={preloader} /></div>
    );
};

export default Preloader;