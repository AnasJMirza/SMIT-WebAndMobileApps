import { Grid } from '@mui/material';
import React from 'react';
import ReputationCard from '../../components/reputationCard/ReputationCard';
import style from './ReputationStyle';

const Reputation = () => {
    return (
        <div>
            
            <Grid container  justifyContent="center">
                <Grid item md={12}>
                    <h1 style={style.mainHead}>Our Reputation</h1>
                </Grid>
            </Grid>

            <Grid container  justifyContent="space-around" marginTop={"55px"}>
                <Grid item >
                    
                        <ReputationCard 
                        src = "/images/headphone.png"
                        heading="Best Services"
                        description = "Nullam senectus porttitor in eget. Eget rutrum leo interdum."
                        />
                    
                </Grid>

                <Grid item >
                    
                        <ReputationCard 
                        src = "/images/headphone.png"
                        heading="Best Teams"
                        description = "Cursus semper tellus volutpat aliquet lacus. "
                        />
                    
                </Grid>

                <Grid item >
                    
                    <ReputationCard 
                    src = "/images/pencil.png"
                    heading="Best Designs"
                    description = "Ultricies at ipsum nunc, tristique nam lectus."
                    />
                    
                </Grid>
            </Grid>
        </div>
    );
};

export default Reputation;