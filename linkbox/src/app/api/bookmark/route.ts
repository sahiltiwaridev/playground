export async function GET() {
  return Response.json({
    title: "My Bookmark",
    url: "https://example.com",
    tag: "example",
  });
}
