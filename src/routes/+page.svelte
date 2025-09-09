<script lang="ts">
  import { token } from '$lib/auth';
  import { get } from 'svelte/store';
  const t = get(token);
</script>

{#if t}
  <div class="rounded-xl bg-white p-6 shadow">
    <h2 class="text-xl font-semibold">Welcome</h2>
    <p class="mt-2 text-sm break-all">Token: {t}</p>
    <button class="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-white" on:click={() => token.set(null)}>
      Log out
    </button>
  </div>
{:else}
  <div class="space-y-3">
    <a class="block rounded-lg bg-black px-4 py-2 text-center text-white" href="/login">Log in</a>
    <a class="block rounded-lg bg-gray-200 px-4 py-2 text-center" href="/signup">Sign up</a>
  </div>
{/if}
