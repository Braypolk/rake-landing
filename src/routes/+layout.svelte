<script>
  import "../app.postcss";
  // Supports weights 200-900
  // import "@fontsource-variable/mulish";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  import { initializeStores } from "@skeletonlabs/skeleton";

  inject({ mode: dev ? "development" : "production" });
  initializeStores();
</script>

<body class="bg-surface-400">
  <slot />
</body>

<style global>
  body { @apply bg-surface-100-800-token; }
</style>
