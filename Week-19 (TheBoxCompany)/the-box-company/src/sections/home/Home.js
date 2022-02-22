import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import style from './HomeStyle';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const Home = () => {
    return (
        <div>
            <Navbar/>

            {/* Main home Section Starts  Here */}

            <div style={style.background}>
                <Grid container alignItems={"center"} height="90vh">
                    <Grid itme  md={6} lg={6} xs={12}>
                        <p style={style.heading}>
                            Building things is our mission.
                        </p>    
                    </Grid>
                    
                    <Grid item md={6} lg={6}>
                        <div style={style.FPPosition}>
                            {/* Feture Projects  */}

                            <div style={style.FP}>
                                <p style={style.FPHeading}>Feature Projects</p>
                                <p style={style.FPDescription}>The National University of Architecture</p>
                            </div>

                            <div style={style.FPButton}>
                                <div style={style.FPIcon}>
                                    <WestIcon  />
                                    <span>Back</span>
                                </div>

                                <div style={style.FPLine}>
                                    {/* Line between Button */}
                                </div>

                                <div style={style.FPIcon} >
                                    <span>Next </span>
                                    <EastIcon/>
                                </div>
                                
                            </div>
                        </div>
                    </Grid>
                    
                </Grid> 
            </div>


            {/* Main Home Section Ends Here */}
            
        </div>
    );
};

export default Home;