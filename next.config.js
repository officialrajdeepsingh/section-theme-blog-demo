/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "section-theme-blog",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
  readingTime: true,
  codeHighlight: true,
});

module.exports = withNextra({
  reactStrictMode: true,
});
