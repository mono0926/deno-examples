// `Uncaught (in promise) ReferenceError: Access to "location"`というエラーが出ている模様
// import "https://deno.land/x/fetch_event_adapter/mod.ts";

addEventListener("fetch", (event: any) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });

  event.respondWith(response);
});
