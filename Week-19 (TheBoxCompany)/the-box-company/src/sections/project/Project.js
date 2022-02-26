import { Grid } from '@mui/material';
import React from 'react';
import Button from '../../components/button/Button';
import ProjectCard from '../../components/projectCard/ProjectCard';
import style from './ProjectStyle';

const Project = () => {
    return (
        <div>
            <Grid container marginTop={"90px"}>

                
                <Grid item md={4} paddingLeft="60px">
                    <p style={style.head}>Projects</p>
                    <div style={style.flex}>
                        <p style={style.selected}>  |&nbsp; All</p>
                        <p> &nbsp; Commercial</p>   
                        <p> &nbsp; Residential</p>
                        <p> &nbsp; Other</p>
                    </div>
                </Grid>

                <Grid item md={8}>

                    <Grid container marginTop="60px">
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

                <Grid container>
                    <Grid item md={4}></Grid>

                    <Grid item md={7}>
                        <div style={style.btnFlex}>
                            <Button text="Back" west={true} />
                            <Grid container alignItems={"center"} height="64px" justifyContent={"center"}>
                                <img src='/images/pageControl.png' />
                            </Grid>
                            <Button text="Next" east={true} />
                        </div>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
};

export default Project;