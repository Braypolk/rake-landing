<script>
  import "../app.postcss";
  // Supports weights 200-900
  import "@fontsource-variable/mulish";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  import { initializeStores } from "@skeletonlabs/skeleton";

  inject({ mode: dev ? "development" : "production" });
  initializeStores();
</script>

<slot />

<style>
  * {
    font-family: "Mulish Variable", sans-serif;
  }
</style>
