import { useState } from "react";

function Clock() {
  const [now, setNow] = useState(new Date())

  setTimeout(() => {
    // console.log(new Date());
    setNow(new Date())
  }, 1000);

  return (
    <div className="Clock">
      {now.toLocaleTimeString()}
    </div>
    // React.createElement('div', { className: 'Clock' }, now)
  );
}

export default Clock;