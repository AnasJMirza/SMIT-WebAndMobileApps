import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import style from './HomeStyle';

const Home = () => {
    return (
        <div>
            <Navbar/>

            {/* Main home Section Starts  Here */}

            <div style={style.background}>
                <Grid container alignItems={"center"} height="90vh">
                    <Grid itme  md={6}>
                        <p style={style.heading}>Building things is our mission.</p>    
                    </Grid>

                    
                </Grid> 
            </div>



            {/* Main Home Section Ends Here */}
        </div>
    );
};

export default Home;