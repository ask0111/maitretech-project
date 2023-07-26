import { useState } from 'react';
import './index.css';
import { json } from 'react-router-dom';


export default function Cards({item}){
    let [itemState, setItemState] = useState(0);

    const Increament = (name)=>{
        setItemState(++itemState);


        let check = JSON.parse(window.localStorage.getItem("cart"));
        check.forEach(element => {
            if(element !== name){
                if(window.localStorage.getItem("cart") == undefined){
                    window.localStorage.setItem('cart', JSON.stringify([name]))
                }else{
                    window.localStorage.setItem('cart', [...JSON.parse(window.localStorage.getItem("cart")), JSON.stringify(name)])
                }
            }
        });
        
    }

    const Decreament = ()=>{
        if(itemState < 1){
            setItemState(0);
            return ;
        }
        setItemState(--itemState);
    }

    return(<>
        <div className="card-container">
        <div className="card-ct-img">
            <img src={item.image} />
        </div>
            <div className="card-ct-text">
                <div className="card-ct-sub-text">
                    <h2>{item.title}</h2>
                    <p>{"Price: " + item.price}</p>

                    {itemState > 0 ? (<><p>{"total: " + itemState}</p> <p>{"Cost(INR): " + (itemState*item.price)}</p></>) : null}

                </div>
                <div className="card-ct-text-btns">
                    <button onClick={()=>Increament(item.title)} className="lt-btn">&#43;</button>
                    <button onClick={()=>Decreament(item.title)} className={`rt-btn ${itemState > 0 ? "rt-btn1" : ""}`}>&#8722;</button>
                </div>
            </div>
        </div>
    </>)
}