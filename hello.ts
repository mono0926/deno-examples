addEventListener("fetch", (event: any) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });

  event.respondWith(response);
});
