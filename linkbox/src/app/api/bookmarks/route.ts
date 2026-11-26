// import data from "@/app/lib/store";
import { pool } from "@/app/lib/db";

export async function GET() {
  // return Response.json(data);
  const result = await pool.query(
    `SELECT id, url, title, tag, is_read AS "isRead", created_at FROM bookmarks ORDER BY id`,
  );
  return Response.json(result.rows);
}

export async function POST(request: Request) {
  try {
    const req = await request.json();
    if (
      req.tag.trim() === "" ||
      req.title.trim() === "" ||
      req.url.trim() === ""
    ) {
      return Response.json(
        { error: "Title, tag and URL are required" },
        { status: 400 },
      );
    } else {
      //     let newBookmarkId;
      //     if (data.length === 0) {
      //       newBookmarkId = 1;
      //     } else {
      //       newBookmarkId = data[data.length - 1].id + 1;
      //     }
      //     req.id = newBookmarkId;
      //     data.push(req);
      const result = await pool.query(
        `INSERT INTO bookmarks (url, title, tag)
          VALUES ($1, $2, $3)
          RETURNING id, url, title, tag, is_read AS "isRead", created_at`,
        [req.url, req.title, req.tag],
      );
      return Response.json(result.rows[0], { status: 201 });
    }
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }
}
