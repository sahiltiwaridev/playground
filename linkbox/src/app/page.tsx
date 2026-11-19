"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<{
    title: string;
    url: string;
    tag: string;
  } | null>(null);

  const fetchdata = async () => {
    const res = await fetch("/api/bookmark");
    const bookmarkData = await res.json();
    setData(bookmarkData);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>This is the homepage</h1>
      <div>
        <p>{data?.title}</p>
        <p>{data?.url}</p>
        <p>{data?.tag}</p>
        <button onClick={() => fetchdata()}>Click me</button>
      </div>
    </div>
  );
}
