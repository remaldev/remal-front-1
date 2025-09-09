import { writable } from 'svelte/store';

const key = 'auth_token';
const initial = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;

export const token = writable<string | null>(initial);

token.subscribe((v) => {
  if (typeof localStorage === 'undefined') return;
  if (v) localStorage.setItem(key, v);
  else localStorage.removeItem(key);
});
