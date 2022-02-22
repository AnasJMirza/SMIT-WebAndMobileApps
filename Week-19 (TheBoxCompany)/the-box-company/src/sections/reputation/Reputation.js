import { Grid } from '@mui/material';
import React from 'react';
import ReputationCard from '../../components/reputationCard/ReputationCard';
import style from './ReputationStyle';

const Reputation = () => {
    return (
        <div>
            
            <Grid container justifyContent="center">
                <Grid item md={12}>
                    <h1 style={style.mainHead}>Our Reputation</h1>
                </Grid>
            </Grid>

            <Grid container paddingLeft={"70px"} >
                <Grid item md={4}>
                    <div>
                        <ReputationCard 
                        src = "/images/headphone.png"
                        heading="Best Services"
                        description = "Nullam senectus porttitor in eget. Eget rutrum leo interdum."
                        />
                    </div>
                </Grid>

                <Grid item md={4}>
                    <div>
                        <ReputationCard 
                        src = "/images/headphone.png"
                        heading="Best Teams"
                        description = "Cursus semper tellus volutpat aliquet lacus. "
                        />
                    </div>
                </Grid>

                <Grid item md={4}>
                    <div>
                    <ReputationCard 
                    src = "/images/pencil.png"
                    heading="Best Designs"
                    description = "Ultricies at ipsum nunc, tristique nam lectus."
                    />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Reputation;