import { padding } from "@mui/system";


const style = {
    background : {
        height : '90vh',
        backgroundImage : 'url("images/main.png")',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat'

    },

    heading : {
        fontFamily: 'poppins',
        fontStyle: 'normal',
        fontWeight: "600",
        fontSize: '72px',
        lineHeight: '84px',
        color: '#292E3D',
        marginLeft : '95px',
    },

    FP : {
        backgroundColor : '#3559C7',
        height : '150px',
        width : '416px',

        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-around',
        alignItems : 'center',
    },

    FPHeading : {
        fontFamily: 'poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '23px',
        textAlign: 'center',
        color : 'white',
    },

    FPDescription : {
        fontFamily: 'poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        textAlign: 'center',

        /* Neutral/White */

        color: '#FFFFFF',
    },

    FPButton : {
        width : '416px',
        height : '40px',
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center',
        backgroundColor : '#292E3D',
        fontFamily : 'poppins',
        color : 'white',
        cursor : 'pointer',
        // border : '1px solid black'
    },

    FPPosition : {
        position : 'absolute',
        
        bottom : '0px',
        right : '0px',
        
    },

    FPIcon : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-around',
        width : '100px',
    },

    FPLine : {
        height : '40px',
        backgroundColor : 'white',
        width : '1px',
    }

}

export default style;