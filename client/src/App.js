import React, { useEffect } from "react";
import {useDispatch} from "react-redux"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Trikers from "./components/Trikers";

import { getData } from "./store/dataReducer";
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getData())
}, [dispatch])
return (
    <>
    <Header />
    <Trikers />

    <Footer />
    </>
  );
}

export default App;
