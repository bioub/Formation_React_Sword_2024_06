import { useEffect, useState } from "react";

function Clock() {
  const [now, setNow] = useState(new Date())
  const [delay, setDelay] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(delay);
      setNow(new Date());
    }, delay);

    return () => {
      clearInterval(interval);
    }
  }, [delay]);

  return (
    <div className="Clock">
      <input type="number" value={delay} onChange={(e) => setDelay(e.target.valueAsNumber)} />
      {now.toLocaleTimeString()}
    </div>
    // React.createElement('div', { className: 'Clock' }, now)
  );
}

export default Clock;