
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddStudent } from '../../store/actions/AddStudent';




const UseForm = () => {

    const [loader, setLoader] = useState(false)

    let dispatch = useDispatch();

    let newName = "";
    let newRollNum = "";
    let newDegree = "";

    const nameGetter = (e)=>{
        newName = e.target.value;
        
    }

    const rollNumGetter = (e)=>{
        newRollNum = e.target.value;
        
    }

    const degreeGetter = (e)=>{
        newDegree = e.target.value;
        
    }

    const submitHandler = ()=>{
        // if (newName != "") {
            // console.log("Name dispatched");
            dispatch(AddStudent({
                name : newName,
                rollNum : newRollNum,
                degree : newDegree
            }, setLoader))    
        // }
        
    }

    return {
        nameGetter,
        rollNumGetter,
        degreeGetter,
        submitHandler
    };
};

export default UseForm;