import axios from "axios";

export const FETCH_HOME_DATA = "FETCH_HOME_DATA"


export const fetchHomeData = () => async (dispatch) =>{
    try {
        const homeData = await axios.get("https://fakestoreapi.com/products");
        console.log("Home data action run");

        dispatch({
            type:FETCH_HOME_DATA,
            payload:homeData.data
        })
        
    } catch (error) {
        console.log(error);
    }
}