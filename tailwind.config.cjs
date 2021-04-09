const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,cjs,js,svelte,ts}"],
    options: {
      defaultExtractor: (content) => [
        ...tailwindExtractor(content),
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
      ],
      keyframes: true,
    },
  },
  theme: {
    extend: {
      colors: {
        reepolee: {
          100: "#ffece6",
          500: "#ff3e00",
          700: "#bf2e00",
        },
        svelte: {
          100: "#ffece6",
          500: "#ff3e00",
          700: "#bf2e00",
        },
        vite: {
          300: "#747bff",
          500: "#646cff",
        },
        tailwind: {
          500: "#44a8b3",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
