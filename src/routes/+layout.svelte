<script>
  import "../app.postcss";
  // Supports weights 200-900
  import "@fontsource-variable/mulish";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });
</script>

<slot />

<style>
  * {
    font-family: "Mulish Variable", sans-serif;
  }
</style>
