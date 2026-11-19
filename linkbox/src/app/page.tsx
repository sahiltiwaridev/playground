"use client";

import { useEffect, useState } from "react";

export default function Home() {
  type Bookmark = {
    id: number;
    title: string;
    url: string;
    tag: string;
    isRead: boolean;
  };
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Bookmark[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("/api/bookmarks");
        const bookmarkData = await res.json();
        setData(bookmarkData);
        setLoading(false);
        // console.log(typeof bookmarkData);
        // console.log(bookmarkData);
      } catch (error) {
        setError("Failed to fetch bookmarks");
        setLoading(false);
        console.error("Error fetching bookmarks:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>This is the homepage</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {data && data.length > 0 ? (
            data.map((item) => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.url}</p>
                <p>{item.tag}</p>
                <p>{item.isRead ? "Read" : "Unread"}</p>
              </div>
            ))
          ) : (
            <p>No bookmarks yet</p>
          )}
        </div>
      )}
    </div>
  );
}
