import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Store from '../../config/Store';
import { fetchHomeData } from '../../store/actions/HomeActions';

const UseHome = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("home component run");
        dispatch(fetchHomeData())
    }, [])

    const homeData = useSelector((store)=> store.FetchReducer.data)
    

    return {
        useEffect,
        homeData
    }
};

export default UseHome;