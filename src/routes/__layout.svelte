<script>
  import { browser } from "$app/env";

  import { session } from "$app/stores";
  import supabase from "$lib/db";

  import Header from "$lib/Header/index.svelte";
  import "../app.css";

  if (browser) {
    $session = supabase.auth.session();
    supabase.auth.onAuthStateChange((event, supaSession) => {
      $session = supaSession;
    });
  }
</script>

<Header />

<main>
  <slot />
</main>

<style>
  main {
    padding: 1rem 5rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
