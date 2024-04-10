import React from "react";
import Tag from "../component/Tag";
import BasicInfo from "../component/BasicInfo";
import Flip from "./Flip";
import SB9 from "./SB9";
import BRRRR from "./BRRRR";

function Main() {

    
    const [curTab, setCurTab] = React.useState("Flip")

    return <div style={{display: "flex", border: "1px solid black", flexDirection: "column"}}>
      <div style={{display: "flex", flexDirection: "row"}}>
        <Tag tagName={"Flip"} setCurTab={setCurTab}/>
        <Tag tagName={"SB9"} setCurTab={setCurTab}/>
        <Tag tagName={"BRRRR"} setCurTab={setCurTab}/>
      </div>
      <BasicInfo/>
      {curTab === "Flip" ? <Flip/> : ""}
      {curTab === "SB9" ? <SB9/> : ""}
      {curTab === "BRRRR" ? <BRRRR/> : ""}
    </div>
}

export default Main;