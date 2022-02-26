import { Grid } from '@mui/material';
import React from 'react';
import style from './FooterStyle'

const Footer = () => {
    return (
        <div>
            <Grid container>


                <Grid item md={6}>
                    anas
                </Grid>


                <Grid item md={6}>anas</Grid>


            </Grid>

            <div style={style.footerColor}>
                <p>TheBox Company © 2022. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;