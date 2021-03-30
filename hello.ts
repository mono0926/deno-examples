import "https://deno.land/x/fetch_event_adapter/mod.ts";

if (typeof FetchEvent !== "undefined") console.log(true);

addEventListener("fetch", (event) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });

  event.respondWith(response);
});
