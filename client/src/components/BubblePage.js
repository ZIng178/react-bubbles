import React, { useState, useEffect } from "react";


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "./Auth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  // fetch your colors data from the server when the component mounts
    // set that data to the colorList state property
  useEffect(()=>{
    axiosWithAuth()
    .get("/colors")
    .then(response=>{
      setColorList(response.data)
    })
    .catch(error=>console.log(error))
  },[])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
