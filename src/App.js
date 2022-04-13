import React,{useState} from "react";
import "./style.css";
function Hooks(){
  return(
    <>
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
