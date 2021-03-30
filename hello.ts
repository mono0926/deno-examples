import "https://deno.land/x/fetch_event_adapter/mod.ts";

addEventListener("fetch", (event: FetchEvent) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });

  event.respondWith(response);
});
