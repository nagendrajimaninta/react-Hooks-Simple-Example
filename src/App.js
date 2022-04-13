import React,{useState} from "react";
import "./style.css";
function UseState(){
  return (
    <>
    <h1>UseState Hook allows us to track state of our functional component</h1>
    <h2>UseState returns two things One is Initial state and the function to update the state</h2>
    </>
  );
}
function SetState(){
  const [col,setCol] = useState("Red");
  return (
    <>
    <UseState />
    <h1>{col}</h1>
    <button onClick={()=>setCol("Black")}>Black</button>
    <button onClick={()=>setCol("Blue")}>Blue</button>
    <button onClick={()=>setCol("Yellow")}>Yellow</button>
    <button onClick={()=>setCol("Green")}>Green</button>
    <button onClick={()=>setCol("White")}>White</button>
    </>
  );
}
function Hooks(){
  return(
    <>
    <SetState />
    <h2>You must import Hooks from React</h2>
    <h3>Hooks were added to react is 16.8 versiom in place of class component life cycle methods</h3>
    <h3>Hooks allows to functional component to have state and other react features </h3>
    <h1>Genarally class components are no longer needed</h1>
    <h3>Genarally Hooks Replace class component ,But there are no plans to remove the class components from React</h3>

    </>
  );
}
function SimpleState(){
  const [num,setNum] = useState(0);
  return (
    <>
    <button onClick={()=>setNum(num+1)}>Inc</button>&nbsp;&nbsp;
    <button onClick={()=>setNum(num-1)}>Dec</button>
    <h3>The Number is : {num}</h3>
    <h3>This is the simple example of the useState hook</h3>
    </>
  );
}
export default function App() {
  return (
    <div>
      <SimpleState />
      <Hooks />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
