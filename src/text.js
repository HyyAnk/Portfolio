export function withoutTrailingPeriod(value) {
  return typeof value === 'string' ? value.replace(/\.+\s*$/u, '') : value;
}
