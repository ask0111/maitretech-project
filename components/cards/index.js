import { useEffect, useState } from "react";
import Cards from "./cards";

export default function Items(){
    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/data/feeds.json')
            const jsonData = await response.json();
            setState([...jsonData]);
            console.log(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
    
        fetchData();
    }, []);


    
    return(<div className="items-container">
        {
            state?.map((prd)=> <Cards item={prd} />)
            
        }
        
    </div>)
}