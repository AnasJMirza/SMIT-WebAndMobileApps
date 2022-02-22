import { Grid } from '@mui/material';
import React from 'react';
import ServicesCard1 from '../../components/servicesCard/ServiceCard1';
import ServicesCard from '../../components/servicesCard/ServicesCard';
// import ServicesCard1 from '../../components/servicesCard/ServicesCard1';
import style from './ServicesStyle';

const Services = () => {

    return (
        <div style={style.background}>
            <h1 style={style.mainHead}>Services</h1>

            <Grid container justifyContent="space-around">
                <Grid item>
                    <ServicesCard1 
                    url = "/images/services/construction.png"
                    title = "Construction"
                    />
                </Grid>

                <Grid item>
                    <ServicesCard 
                    url = "/images/services/renovation.png"
                    title = "Renovation"
                    
                    />
                </Grid>

                <Grid item>
                    <ServicesCard1 
                    url = "/images/services/consultation.png"
                    title = "Consultation"
                    />
                </Grid>
            </Grid>

            <br/>
            <br/>
            <br/>

            <Grid container justifyContent="space-around">
                <Grid item>
                    <ServicesCard
                    url = "/images/services/repair.png"
                    title = "Repair Services"
                    
                    />
                </Grid>

                <Grid item>
                    <ServicesCard1 
                    url = "/images/services/architecture.png"
                    title = "Architecture"
                    
                    />
                </Grid>

                <Grid item>
                    <ServicesCard 
                    url = "/images/services/electric.png"
                    title = "Electric"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Services;