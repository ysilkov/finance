import React from "react";
import { useSelector } from "react-redux";
import { changeValueColor, changeColor, changeValue} from "../helper/helper";
import Loding from "./Loding";


const Trikers =()=>{
    const data = useSelector((state)=>state.add.trikers)
        changeValueColor(data); 
    return (
        <div>  
        {data.length === 0 ? <Loding/> : 
    <div className="tickers">
    {data[data.length-1].map((val)=>(
      <div key={val.ticker.toString()} className="ticker-container">
        <div className="ticker">
            <div className="ticker-main">{val.ticker}</div>
            <div className="ticker-exchange">{val.exchange}</div>
            <div className="ticker-price">{val.price} $</div>
            <div className="ticker-footer">
            <div className="ticker-percent" style={{"background": changeColor.reverse().pop()}}>{changeValue.reverse().pop()} %</div>
            <div className="tiker-button-container"><button className="ticker-button">+</button>
            <div className="ticker-button-text">Підписатися</div>
            </div>
            </div>
        </div>
        </div>
    ))}
    </div>
    }
    </div>
    ) 
}

export default Trikers;