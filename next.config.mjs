/** @type {import('next').NextConfig} */

// GitHub Pages serves the site from a project subpath.
// Applied only during production builds so `npm run dev`
// keeps serving at http://localhost:3000/ unchanged.
const basePath =
  process.env.NODE_ENV === "production" ? "/pangasinan-heritage" : "";

const nextConfig = {
  // Static export for GitHub Pages hosting.
  output: "export",
  basePath,
  // Exposed so the shared base-path helper can prefix local
  // public/ image paths at build time (required because
  // unoptimized next/image does not auto-prefix basePath).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // GitHub Pages cannot run the Next.js image optimizer;
    // images are served as-is from public/.
    unoptimized: true,
  },
};

export default nextConfig;
