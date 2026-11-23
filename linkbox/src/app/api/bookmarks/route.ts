import data from "@/app/lib/store";

export async function GET() {
  return Response.json(data);
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
        { error: "Title and URL are required" },
        { status: 400 },
      );
    } else {
      let newBookmarkId;
      if (data.length === 0) {
        newBookmarkId = 1;
      } else {
        newBookmarkId = data[data.length - 1].id + 1;
      }

      req.id = newBookmarkId;
      data.push(req);
      return Response.json(req, { status: 201 });
    }
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }
}
