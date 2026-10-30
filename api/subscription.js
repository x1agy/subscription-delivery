export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== `/${env.ACCESS_TOKEN}`) {
      return new Response('Not found', { status: 404 });
    }

    return new Response(env.CONFIG, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'profile-update-interval': '1',
      },
    });
  },
};
