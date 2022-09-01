import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loding from "./components/Loading/Loding";
import Tickers from "./components/Ticker/Tickers";
import TickersBody from "./components/TickersBody/TickersBody";

import { getData } from "./store/dataReducer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const data = useSelector((state) => state.add.tickers);
  return (
    <>
      {data.length === 0 ? (
        <Loding />
      ) : (
        <div>
          <Header />
          <Tickers />
          <TickersBody />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
