import { Grid } from '@mui/material';
import React from 'react';
import style from './StatsStyle';

const Stats = () => {
    return (
        <div>
            <Grid container marginTop={"20px"}>
                
                
                <Grid item md={6} >
                    <img src='/images/stats.png' width={"185%"} />
                </Grid>

                <Grid item md={1}>
                    
                </Grid>

                <Grid item md={3}>
                    <div style={style.flex}>
                        <h1 style={style.head}>30 Years Experience</h1>
                        <p style={style.para}>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>

                        <div style={style.btn}>
                            Contact Us
                        </div>
                    </div>
                </Grid>
            </Grid>

            <div style={style.BG}>
                <Grid container>
                    <Grid item md={1}></Grid>

                    <Grid item md={7}>
                        <h1 style={style.BGHead}>Free consultation with exceptional quality</h1>
                        <p style={style.BGPara}>Just one call away: +84 1102 2703</p>
                    </Grid>
                    
                    <Grid item md={1}></Grid>

                    <Grid item md={2}>
                        <div style={style.BGBtn}>Get your consultation</div>
                    </Grid>

                    <Grid item md={1}></Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Stats;