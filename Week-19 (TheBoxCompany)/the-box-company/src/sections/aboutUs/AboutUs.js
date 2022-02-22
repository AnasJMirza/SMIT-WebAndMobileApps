import { Grid } from '@mui/material';
import React from 'react';
import style from './AboutUsStyle';

const AboutUs = () => {
    return (
        <div style={style.background}>
            <Grid container>
                <Grid item md={7}></Grid>

                <Grid item md={5}  container alignItems={"center"} height="95vh">
                    <div style={style.aboutUs}>
                        <p style={style.title} >About Us</p>
                        <p style={style.para}>
                        For more than 30 years we have been delivering world-class construction and we've built many lasting relationships along the way. 
                        </p>

                        <p style={style.para}>
                        We've matured into an industry leader and trusted resource for those    seeking quality, innovation and reliability when building in the U.S.
                        </p>

                        <div style={style.btn}>
                            <div>
                                More on Our History
                            </div>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </div>
    );
};

export default AboutUs;