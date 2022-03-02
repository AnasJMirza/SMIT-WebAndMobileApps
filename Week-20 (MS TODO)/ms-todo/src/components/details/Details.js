import React from 'react';
import './Details.css'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';

const Details = () => {
    return (
        <div>
            <div className='details'>
                <div className='date'>
                    <p>My Day</p>
                    <p>Wednesday, March 2</p>
                </div>

                <div className='dateIcons'>
                    
                    <div className='dateIcons'>
                        <ImportExportOutlinedIcon fontSize='small'/>
                        <p>Sort</p>
                    </div>

                    <div className='dateIcons'>
                        <LightbulbOutlinedIcon fontSize='small'/>
                        <p>Suggestions</p>    
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Details;