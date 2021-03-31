// `Uncaught (in promise) ReferenceError: Access to "location"`というエラーが出ている模様
// import "https://deno.land/x/fetch_event_adapter/mod.ts";

addEventListener("fetch", (event: any) => {
  event.respondWith(
    new Response(`Now: ${new Date().toISOString()} (　´･‿･｀)`, {
      headers: { "content-type": "text/plain" },
    }),
  );
});
