
import { useNavigate } from "react-router-dom"
import './index.css'
import { useEffect } from "react";
export default function Menu(){
    const navigate = useNavigate();
    
    return(<div className="ntainer">
    <div className="menu-container">
        <p>
            Welcome to Food's Kitchen
        </p>
        <button onClick={()=> navigate('/menu')}>Go To Menu</button>
    </div>
    </div>
    )
}