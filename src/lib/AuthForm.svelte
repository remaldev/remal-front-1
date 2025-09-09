<script lang="ts">
  export let mode: 'login' | 'signup' = 'login';
  export let onSubmit: (email: string, password: string) => Promise<void>;
  let email = '';
  let password = '';
  let loading = false;
  let error = '';

  async function submit() {
    error = '';
    loading = true;
    try { await onSubmit(email.trim(), password); }
    catch (e:any) { error = e?.message ?? 'Failed'; }
    finally { loading = false; }
  }
</script>

<form class="space-y-4" on:submit|preventDefault={submit}>
  <h1 class="text-2xl font-semibold">{mode === 'login' ? 'Log in' : 'Sign up'}</h1>

  {#if error}
    <p class="rounded-md bg-red-100 px-3 py-2 text-sm text-red-700">{error}</p>
  {/if}

  <div class="space-y-1">
    <label class="text-sm">Email</label>
    <input class="w-full rounded-md" type="email" bind:value={email} required />
  </div>

  <div class="space-y-1">
    <label class="text-sm">Password</label>
    <input class="w-full rounded-md" type="password" bind:value={password} minlength="6" required />
  </div>

  <button class="w-full rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50"
          disabled={loading}>
    {loading ? 'Please wait...' : (mode === 'login' ? 'Log in' : 'Create account')}
  </button>
</form>
