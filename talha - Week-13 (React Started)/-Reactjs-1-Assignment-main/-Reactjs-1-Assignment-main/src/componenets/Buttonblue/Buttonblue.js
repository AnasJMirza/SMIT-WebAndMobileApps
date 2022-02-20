import React from 'react';
import './Butoonblue.css'

const Buttonblue = (props) => {
    return (
        <div className='btnblue'>

            <button type="button" class="btn btn-primary" style={{color:props.color,width:props.width ,background:props.background , font:props.font} }>{props.title}</button>
        
        </div>
    );
};

export default Buttonblue;