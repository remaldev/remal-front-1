<script lang="ts">
  import AuthForm from '$lib/AuthForm.svelte';
  import { token } from '$lib/auth';

  async function doLogin(email: string, password: string) {
    // call your backend here. example:
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('Invalid credentials');
    const json = await res.json();
    token.set(json?.data?.access_token ?? null);
    // redirect after login
    window.location.href = '/';
  }
</script>

<AuthForm mode="login" onSubmit={doLogin} />

<p class="mt-4 text-sm">
  No account?
  <a class="text-blue-600 hover:underline" href="/signup">Create one</a>
</p>
