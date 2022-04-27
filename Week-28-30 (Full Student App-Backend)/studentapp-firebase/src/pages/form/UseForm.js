
import { useDispatch } from 'react-redux';
import { AddStudent } from '../../store/actions/AddStudent';



const UseForm = () => {

    let dispatch = useDispatch();
    let name = ""

    const nameGetter = (e)=>{
        name = e.target.value;
        
    }

    const submitHandler = ()=>{
        console.log("Name dipatched");
        dispatch(AddStudent({name:name}))
    }

    return {
        nameGetter,
        submitHandler
    };
};

export default UseForm;