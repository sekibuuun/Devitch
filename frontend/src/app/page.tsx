"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [hello, setHello] = useState('Loading...');

  useEffect(() => {
    async function getHello() {
      const res = await fetch("http://localhost:8080/hello");
      const text = await res.text();
      setHello(text);
    }

    getHello();
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時にのみ実行されます

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{hello}</h1>
    </div>
  );
}
