import React, { useState, useEffect } from 'react';

export default function HookTest() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('마운드 될때 한번만 실행');
  }, []);

  useEffect(() => {
    console.log('이것 먼저?');
  });

  useEffect(() => {
    console.log('count : ', count);
    document.title = `You clicked ${count} times`;
    return () => console.log('clean up');
  }, [count]);

  return (
    <div>
      <p>
        You clicked
        {count}
        times
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
