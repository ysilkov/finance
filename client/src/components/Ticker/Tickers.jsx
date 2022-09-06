import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeValueColor,
  changeColor,
  changeValue,
  checkTrikerColor,
} from "../../helper/helper";
import { addFavoriteTickers } from "../../store/dataReducer";
import style from "./Ticker.module.css";

const Trikers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.add.tickers);
  changeValueColor(data);
  const addTickers = (e)=>{
    dispatch(addFavoriteTickers(e.target.id))
  }
  return (
    <div>
      <div className={style.tickers}>
        {data[data.length - 1].map((val) => (
          <div key={val.ticker.toString()} className={style.tickerContainer}>
            <div className={style.ticker}>
              <div
                className={style.tickerName}
                style={checkTrikerColor(val.ticker)}
                key={val.ticker.toString()}
              >
                {val.ticker}
              </div>
              <div className={style.tickerExchange}>{val.exchange}</div>
              <div className={style.tickerPrice}>{val.price} $</div>
              <div className={style.tickerFooter}>
                <div
                  className={`${style.tickerPercent} ${changeColor.reverse().pop() === "green" ? style.tickerChangeColorGreen : style.tickerChangeColorRed}`}
                >
                  {changeValue.reverse().pop()} %
                </div>
                <div className={style.tikerButtonContainer}>
                  <button
                    className={style.tickerButton}
                    id={val.ticker}
                    onClick={(event) =>
                      addTickers(event)
                    }
                  >
                    +
                  </button>
                  <div className={style.tickerButtonText}>Підписатися</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trikers;
