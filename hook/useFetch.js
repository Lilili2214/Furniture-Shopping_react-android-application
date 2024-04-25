import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch=()=>{
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('http://172.16.1.52:3000/api/products/');
            console.log('Response:', response.data); 
            setData(response.data);
            setIsLoading(false);
        } catch (err) {
            console.error('Error fetching data:', err); 
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(()=>{
        fetchData()
    },[])

    const refetch= ()=>{
        setIsLoading(true)
        fetchData()
    }




    return {data, isLoading, error, refetch}
}

export default useFetch
