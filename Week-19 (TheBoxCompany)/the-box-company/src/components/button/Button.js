import React from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import style from './ButtonStyle';

const Button = (props) => {
    return (
        <div>
            <div style={props.BG ? props.color : style.flex}>
                {props.west ? <WestIcon/> : ''}
                <div style={style.pad}>
                {props.text}
                </div>
                {props.east ? <EastIcon/> : ''}
            </div>
        </div>
    );
};

export default Button;