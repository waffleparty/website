/** Prefix a site path with the configured base (`/website` on GitHub Pages). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export const REPO = 'https://github.com/waffleparty/waffles';
export const docs = (page: string) => `${REPO}/blob/main/docs/${page}`;
