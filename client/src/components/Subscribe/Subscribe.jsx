import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkTrikerColor } from "../../helper/helper";
import { upDate } from "../../store/dataReducer";
import style from "./Subscribe.module.css";

const Subscribe = () => {
  const tickers = useSelector((state) => state.add.trikers);
  const favorite = useSelector((state) => state.add.favoriteTrikers);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(upDate(JSON.parse(localStorage.getItem("tickers"))));
    } catch (err) {}
  }, [dispatch]);
  let favoriteTickers = localStorage.getItem("tickers");
  let filterFavoriteTickers = [];
  if (favoriteTickers !== null) {
    filterFavoriteTickers = tickers[tickers.length - 1].filter((val) => {
      return favoriteTickers.includes(val.ticker);
    });
  }
  const deleteTickers = (e) => {
    let newFavorite = favorite.filter((val) => {
      return val !== e;
    });
    dispatch(upDate([]));
    dispatch(upDate(newFavorite));
    localStorage.setItem("tickers", newFavorite);
  };
  return (
    <div>
      <div className={style.header}>
        <h3>My favorite ticker</h3>
      </div>
      {filterFavoriteTickers.map((val) => (
        <div className={style.favoriteTicker} key={val.ticker.toString()}>
          <div
            className={style.itemTicker}
            style={checkTrikerColor(val.ticker)}
          >
            {val.ticker}
          </div>
          <div className={style.buttonContiner}>
            <button
              className={style.button}
              id={val.ticker}
              onClick={(event) => deleteTickers(event.target.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subscribe;
