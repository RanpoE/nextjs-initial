import '@testing-library/jest-dom/vitest';

beforeEach(() => {
  if (!('crypto' in globalThis)) return;
  if (!globalThis.crypto.randomUUID) {
    globalThis.crypto.randomUUID = () =>
      Math.random().toString(36).slice(2, 10);
  }
});
