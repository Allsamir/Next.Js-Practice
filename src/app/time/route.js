// export const dynamic = "force-dynamic"; // to avoid caching
export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
