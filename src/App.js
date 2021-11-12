import axios from "axios";
import { useEffect } from "react";
import "./styles.css";
export default function App() {
  /**
   *   https://randomuser.me/api
   */

 /*const arr = [1, 2, 3, 4];
  const value = arr[0];

  let object = {};

for(let i =0 ; i < arr.length; i++) {
    if (!object[arr]) {
    object[arr] = i
    console.log(object[arr])
    }
  };

  const out = {
    value: 1,
    child: {
      value: 2,
      child: {
        value: 3,
        child: {
          value: 4
        }
      }
    }
  }; */
let url = "https://randomuser.me/api";

function callApi(){
  axios.get(url).then(res)=>{console.log(res)}
}

useEffect(()=>{callApi()},[])

  return (
    <div className="App">
      <h1>Let create some code magic!</h1>
    </div>
  );
}
