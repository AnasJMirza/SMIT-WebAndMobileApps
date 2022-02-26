import { Grid } from '@mui/material';
import React from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import style from './FooterStyle'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div >
            <Grid container style={style.main} marginTop="15vh">


                <Grid item md={6}>
                    <div style={style.mainFlex}>
                        <div style={style.contactFlex}>
                            <p style={style.contactHead} >ADDRESS:</p>
                            <p style={style.contactPara}>6391 Elgin St. Celina, Delaware 10299</p>
                        </div>

                        <div style={style.contactFlex}>
                            <p style={style.contactHead} > PHONE:</p>
                            <p style={style.contactPara} > &nbsp;  &nbsp; +84 1102 2703</p>
                        </div>

                        <div style={style.contactFlex}>
                            <p style={style.contactHead} >EMAIL:</p>
                            <p style={style.contactPara} >  &nbsp; &nbsp; &nbsp; hello@thebox.com</p>
                        </div>

                        <Grid container marginLeft={"50px"} >
                            <img src='/images/logo.png' />
                        </Grid>
                    </div>
                </Grid>


                <Grid item md={6} container flexDirection={"column"} justifyContent="space-between" height={"35vh"}>
                    <div style={style.newsMain}>

                        <p style={style.contactHead}>NEWSLETTER:</p>

                        <div style={style.newsFlex}>
                        <Input placeholder="Your email here" />
                        <Button text="Subscribe" BG={true} color={{background: '#2947A9',display : 'flex',
                        justifyContent : 'center',
                        alignItems : 'center',
                        width: '136px',
                        height: '41px',
                        fontSize: '18px',
                        lineHeight: '21px',
                        background: '#F9995D',
                        borderRadius: '4px',
                        color : 'white',
                        cursor : 'pointer',
                        marginLeft : '7px'}} />
                        </div>

                    </div>

                    <div style={style.newsMain}>

                        <p style={style.contactHead}>SOCIALS:</p>

                        <div style={style.iconFlex}>
                            <div>
                                <FacebookIcon fontSize='large'/>
                            </div>
                            <div>
                                <LinkedInIcon fontSize='large' />
                            </div>
                            <div>
                                <TwitterIcon fontSize='large' />
                            </div>
                        </div>
                        
                    </div>
                </Grid>


            </Grid>

            <div style={style.footerColor}>
                <p>TheBox Company © 2022. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;