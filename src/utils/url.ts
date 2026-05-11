/**
 * Prefix an absolute path with Astro's configured `base`, so internal
 * links work whether the site is served at the domain root or under
 * a subpath like /LillicoART-Testing on GitHub Pages.
 *
 *   url("/gallery")  →  "/LillicoART-Testing/gallery" (on GH Pages)
 *   url("/gallery")  →  "/gallery"                    (on the real domain)
 *
 * Pass hash-only links through unchanged.
 */
export const url = (path: string): string => {
  if (!path || path.startsWith("#")) return path;
  if (/^[a-z]+:\/\//i.test(path) || path.startsWith("mailto:")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
};
