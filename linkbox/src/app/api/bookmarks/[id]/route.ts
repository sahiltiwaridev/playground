import { pool } from "@/app/lib/db";
// import data from "@/app/lib/store";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const Id = Number(id);
  // for (let i = 0; i < data.length; i++) {
  // if (data[i].id === Id) {
  // data.splice(i, 1);
  const result = await pool.query(`DELETE FROM bookmarks WHERE id = ($1)`, [
    Id,
  ]);
  if (result.rowCount === 0) {
    return Response.json({ message: "Bookmark not found" }, { status: 404 });
  } else {
    return Response.json({ message: "Bookmark deleted successfully" });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const Id = Number(id);
  // for (let i = 0; i < data.length; i++) {
  // if (data[i].id === Id) {
  // if (data[i].isRead === false) {
  //   data[i].isRead = true;
  // } else {
  //   data[i].isRead = false;
  // }
  const result = await pool.query(
    `UPDATE bookmarks 
    SET is_read = NOT is_read 
    WHERE id = $1 
    RETURNING id, url, title, tag, is_read AS "isRead", created_at`,
    [Id],
  );
  if (result.rowCount !== 0) {
    return Response.json({ message: "Bookmark updated successfully" });
  } else {
    return Response.json({ message: "Bookmark not found" }, { status: 404 });
  }
}
