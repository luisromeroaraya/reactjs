import { useState } from 'react';

function Clock() {
  let time = new Date().toLocaleTimeString();
  const [Ctime, setCtime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(updateTime, 1000);
  return <p>The time is {time}</p>;
}

export default Clock;
