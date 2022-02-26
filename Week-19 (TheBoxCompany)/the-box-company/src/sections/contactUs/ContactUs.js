import { Grid } from '@mui/material';
import React from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import style from './ContactUsStyle'

const ContactUs = () => {
    return (
        <div style={style.BG}>
            <h1 style={style.head}>What can us do for you?</h1>
            
            <Grid container justifyContent={"center"}>
                <Grid item md={5} xs={12}>
                    <p style={style.para}>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
                </Grid>
            </Grid>

            
                
            <Grid container justifyContent={"center"} margin="20px 0px 0px 0px">
                <div style={style.innerInput}>
                    <Input  type="text" placeholder="Your Name"/>
                </div>
                
                <div style={style.innerInput}>
                    <Input  type="email" placeholder="E-Mail"/>
                </div>
            </Grid>
            

            <Grid container justifyContent={"center"}>
                <div style={style.innerInput}>
                    <Input type="text" placeholder="Reason for Contacting"/>
                </div>

                <div  style={style.innerInput}>
                    <Input type="number" placeholder="Phone"/>
                </div>
            </Grid>

            <Grid container justifyContent={"center"} marginTop="10px">
                {/* <div>
                    <Input type="text" placeholder="Message"  style={{width : "520px", height : '135px'}} msg={true} />
                </div> */}

                <div >
                    <textarea style={style.textarea} rows={10} cols={76} placeholder="Message" ></textarea>
                </div>
            </Grid>
                
            <Grid container justifyContent={"center"} marginTop="35px">
                <Grid item>
                    <Button text="Submit" BG={true} color={{background: '#2947A9',display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width: '295px',
        height: '64px',
        fontSize: '18px',
        lineHeight: '21px',
        color : 'white',
        cursor : 'pointer',}} />
                </Grid>
            </Grid>
            

        </div>
    );
};

export default ContactUs;