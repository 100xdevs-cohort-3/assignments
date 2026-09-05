export function validation(name, value, errors = {}) {
  const next = { ...errors };
  if (['petName', 'breed', 'adopterName'].includes(name))
    next[name] = value.trim().length < 3 ? 'Enter at least 3 characters.' : '';
  if (name === 'email')
    next[name] = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
      ? ''
      : 'Enter a valid email address.';
  if (name === 'phone') next[name] = /^\d{10}$/.test(value) ? '' : 'Enter a 10-digit phone number.';
  return next;
}
