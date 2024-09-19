import { useState, useEffect } from "react";
export const useFetch = (url, isList = true) => {
    const [productData, setProductData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const fetchProducts = async() => {
            try{
                const response = await fetch(url);
                const responseData = await response.json();
                // console.log(responseData)
                setProductData(responseData);
            }
            catch(error){
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchProducts();
    },[url,isList])

    return {productData, error, loading}
}