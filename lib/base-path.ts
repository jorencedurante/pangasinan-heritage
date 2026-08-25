// Single source of truth for GitHub Pages base-path handling.
// Empty during development ("/images/..." stays unchanged);
// "/pangasinan-heritage" during production builds.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(src: string): string {
  // Leave external and protocol-relative URLs untouched.
  if (!src.startsWith("/") || src.startsWith("//")) {
    return src;
  }
  // Avoid double-prefixing paths that already include the base path.
  if (BASE_PATH && src.startsWith(`${BASE_PATH}/`)) {
    return src;
  }
  return `${BASE_PATH}${src}`;
}

export default BASE_PATH;
