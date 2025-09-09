<script lang="ts">
  import AuthForm from '$lib/AuthForm.svelte';

  async function doSignup(email: string, password: string) {
    const res = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error('Signup failed');
    // after successful signup you can send them to login
    window.location.href = '/login';
  }
</script>

<AuthForm mode="signup" onSubmit={doSignup} />

<p class="mt-4 text-sm">
  Already registered?
  <a class="text-blue-600 hover:underline" href="/login">Log in</a>
</p>
