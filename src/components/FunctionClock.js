import { useState } from "react";

function FunctionClock() {
  let time = new Date().toLocaleTimeString();
  const [Ctime, setCtime] = useState(time);
  const updateTime = function () {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);
  return <p className="App-function-clock">The time is {Ctime} (Function Component)</p>;
}

export default FunctionClock;
