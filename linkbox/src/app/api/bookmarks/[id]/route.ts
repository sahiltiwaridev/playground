import data from "@/app/lib/store";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const Id = Number(id);
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === Id) {
      data.splice(i, 1);
      return Response.json({ message: "Bookmark deleted successfully" });
    }
  }
  return Response.json({ message: "Bookmark not found" }, { status: 404 });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const Id = Number(id);
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === Id) {
      if (data[i].isRead === false) {
        data[i].isRead = true;
      } else {
        data[i].isRead = false;
      }
      return Response.json({ message: "Bookmark updated successfully" });
    }
  }
  return Response.json({ message: "Bookmark not found" }, { status: 404 });
}
