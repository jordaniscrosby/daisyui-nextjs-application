const withPlugins = require("next-compose-plugins");

const reactSvg = require("next-react-svg");
const path = require("path");

module.exports = withPlugins(
  [
    [
      reactSvg,
      {
        include: path.resolve(__dirname, "src/assets/svg"),
      },
    ],
  ],
  {
    images: {
      deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      // loader: "imgix", // Uncomment this line for STATIC EXPORT
      // path: "", // Uncomment this line for STATIC EXPORT
    },
    env: {
      production_type: "server", // Change variable to "static" for STATIC EXPORT
    },
    // trailingSlash: true // Uncomment this line for STATIC EXPORT
  }
);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});

module.exports = {
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/",
      //   permanent: true,
      // },
    ];
  },
  env: {
    SERVER: process.env.SERVER,
    NEXT_PUBLIC_MODE: process.env.NEXT_PUBLIC_MODE,
    GA_ID: process.env.GA_ID,
  },
  images: {
    domains: [],
  },
};
