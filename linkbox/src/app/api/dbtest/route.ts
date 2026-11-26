import { pool } from "@/app/lib/db";

export async function GET() {
  const result = await pool.query("SELECT 1");
  return Response.json(result.rows);
}
