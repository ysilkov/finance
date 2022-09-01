import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  changeValueColor,
  changeColor,
  changeValue,
  checkTrikerColor,
} from "../../helper/helper";
import Subscribe from "../Subscribe/Subscribe";
import style from "./TickersBody.module.css";

const TrikersBody = () => {
  const [ticker, setTicker] = useState("");
  const data = useSelector((state) => state.add.tickers);
  changeValueColor(data);
   let filterTicker = data[data.length - 1].filter((val) => {
    return val.ticker.toLowerCase().includes(ticker.toLowerCase());
  }); 
  return (
    <div>
      <input
        className={style.input}
        placeholder="Enter ticker"
        onChange={(event) => setTicker(event.target.value)}
      />
      <div className={style.trikersMain}>
        <div className={style.trikersBlock}>
          <table className={style.tickers}>
            <tbody>
              <tr className={style.tableName}>
                <th>Ticker</th>
                <th>Exchange</th>
                <th>Price</th>
                <th>Dividend</th>
                <th>Percent</th>
              </tr>
              {filterTicker.map((val) => (
                <tr
                  className={style.ticker}
                  id={Date.parse(val.last_trade_time)}
                  key={val.ticker.toString()}
                >
                  <td
                    className={style.tickerName}
                    style={checkTrikerColor(val.ticker)}
                  >
                    {val.ticker}
                  </td>
                  <td className={style.tickerExchange}>{val.exchange}</td>
                  <td className={style.tickerPrice}>{val.price} $</td>
                  <td className={style.tickerDividend}>{val.dividend}</td>
                  <td
                    className={style.tickerPercent}
                    style={{ background: changeColor.reverse().pop() }}
                  >
                    {changeValue.reverse().pop()} %
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={style.chooseContainer}>
          <Subscribe />
        </div>
      </div>
    </div>
  );
};
export default TrikersBody;
