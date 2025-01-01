'use client'
import Landing from "@/src/components/landing";
import '../src/css/App.css'
import ReactDOM from "react-dom";
export default function Home() {
  const appCLick = () => {
    // return;
    // let element = document.getElementById("hamMenu");
    // let element2 = document.getElementById("app2");
    // var t = ReactDOM.findDOMNode(element);

    // t.style.transform = "TranslateX(100%)";
  };
  return (
    <div className="App">
      {/* {loading ? (
      <PropagateLoader color={"#64FFDA"} size={30} css={override} />
    ) : (
     
    )} */}
      <>
        <div onClick={()=>{appCLick()}}>
          <Landing />
        </div>
      </>
    </div>
  );
}
