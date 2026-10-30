export function GET(request) {
  const url = new URL(request.url);

  if (
    !process.env.ACCESS_TOKEN ||
    url.searchParams.get('token') !== process.env.ACCESS_TOKEN
  ) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(process.env.CONFIG, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'profile-update-interval': '1',
    },
  });
}
