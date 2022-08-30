import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loding from "./components/Loading/Loding";
import Trikers from "./components/Triker/Trikers";
import TrikersBody from "./components/TrkersBody/TrikersBody";

import { getData } from "./store/dataReducer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const data = useSelector((state) => state.add.trikers);
  return (
    <>
      {data.length === 0 ? (
        <Loding />
      ) : (
        <div>
          <Header />
          <Trikers />
          <TrikersBody />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
