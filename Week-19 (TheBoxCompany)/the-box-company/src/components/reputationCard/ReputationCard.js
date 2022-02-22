import { Grid } from '@mui/material';
import React from 'react';
import style from './ReputationCardStyle';

const ReputationCard = (props) => {
    return (
        <div >
            <Grid container>
                <Grid item>
                    <div style={style.wrapper}>
                        <div>
                            <img src={props.src} ></img>
                        </div>
                        <p style={style.heading}>{props.heading}</p>
                        <p style={style.para}>{props.description}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default ReputationCard;