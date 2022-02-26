import { Grid } from '@mui/material';
import React from 'react';
import ProjectCard from '../../components/projectCard/ProjectCard';
import style from './ProjectStyle';

const Project = () => {
    return (
        <div>
            <Grid container>

                <Grid item md={4}>
                    <p style={style.head}>Projects</p>
                    <p>All</p>
                    <p>Commercial</p>
                    <p>Residential</p>
                    <p>Other</p>
                </Grid>

                <Grid item md={8}>

                    <Grid container>
                        <Grid item md={6}>
                            <ProjectCard src="/images/project/1.png" head="Wildstone Infra Hotel" description="2715 Ash Dr. San Jose, South Dakota" />
                        </Grid>

                        <Grid item md={6}>
                            <ProjectCard src="/images/project/2.png" head="Wildstone Infra Hotel" description="2715 Ash Dr. San Jose, South Dakota"/>
                        </Grid>
                        <Grid item md={6} marginTop="30px">
                            <ProjectCard src="/images/project/3.png" head="Wildstone Infra Hotel" description="2715 Ash Dr. San Jose, South Dakota"/>
                        </Grid>
                        <Grid item md={6} marginTop="30px">
                            <ProjectCard src="/images/project/4.png" head="Wildstone Infra Hotel" description="2715 Ash Dr. San Jose, South Dakota"/>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </div>
    );
};

export default Project;