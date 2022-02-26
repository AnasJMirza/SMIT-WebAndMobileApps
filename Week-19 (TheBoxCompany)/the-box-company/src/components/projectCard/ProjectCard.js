import React from 'react';
import style from './ProjectCardStyle'

const ProjectCard = (props) => {
    return (
        <div>
        <div style={style.BG}>
            <img src={props.src} />

            
                <div style={style.padding}>
                    <p style={style.head}>{props.head}</p>
                    <p style={style.description}>{props.description}</p>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;