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

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");

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

  useEffect(() => {
    fetchdata();
  }, []);

  const saveBookmark = async () => {
    const newBookmark = {
      title,
      url,
      tag,
      isRead: false,
    };

    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBookmark),
      });

      if (!res.ok) {
        throw new Error("Failed to save bookmark");
      }
    } catch (error) {
      return console.error("Error saving bookmark:", error);
    }
    setTitle("");
    setUrl("");
    setTag("");
    fetchdata();
  };

  const deleteBookmark = async (id: number) => {
    const res = await fetch(`/api/bookmarks/${id}`, { method: "DELETE" });
    if (!res.ok) {
      console.error("Failed to delete bookmark");
      return;
    }
    fetchdata();
  };

  const readNotRead = async (id: number) => {
    await fetch(`/api/bookmarks/${id}`, {
      method: "PATCH",
    });
    fetchdata();
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold text-white mb-4">Bookmarks</h1>
      <div className="flex flex-row flex-1 items-center justify-evenly gap-4 w-full max-w-4xl">
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div>
              {data && data.length > 0 ? (
                data.map((item) => (
                  <div className="bg-[#2f2f2f] pb-2" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.url}</p>
                    <p>{item.tag}</p>
                    <p>{item.isRead ? "Read" : "Unread"}</p>
                    <button
                      className="bg-red-500"
                      onClick={() => {
                        deleteBookmark(item.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500"
                      onClick={() => {
                        readNotRead(item.id);
                      }}
                    >
                      {item.isRead ? "Mark as Unread" : "Mark as Read"}
                    </button>
                  </div>
                ))
              ) : (
                <p>No bookmarks yet</p>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1 items-center justify-center">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="url"
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            type="text"
            name="tag"
            placeholder="Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <button onClick={() => saveBookmark()} type="submit">
            Add Bookmark
          </button>
        </div>
      </div>
    </div>
  );
}
