import { Grid } from '@mui/material';
import React from 'react';
import style from './ReputationCardStyle';

const ReputationCard = (props) => {
    return (
        <div >
            
                
            <div style={style.wrapper}>
                <div>
                    <img src={props.src} ></img>
                </div>
                <p style={style.heading}>{props.heading}</p>
                <p style={style.para}>{props.description}</p>
            </div>
                
            
        </div>
    );
};

export default ReputationCard;