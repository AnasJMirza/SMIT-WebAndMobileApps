import React from 'react';
import './Details.css'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import LinearScaleOutlinedIcon from '@mui/icons-material/LinearScaleOutlined';

const Details = () => {
    return (
        <div>
            <div className='details'>
                <div className='date'>
                    <div className='dateFlex'>
                        <p className='dateHeading'>My Day</p>
                        <div className='scaleIcon'>
                            <LinearScaleOutlinedIcon/>
                        </div>
                    </div>
                    <p className='dateSubHeading'>Wednesday, March 2</p>
                </div>

                <div className='dateIcons'>
                    
                    <div className='dateIcon'>
                        <ImportExportOutlinedIcon fontSize='small'/>
                        <p>Sort</p>
                    </div>

                    <div className='dateIcon'>
                        <LightbulbOutlinedIcon fontSize='small'/>
                        <p>Suggestions</p>    
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Details;