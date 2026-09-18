// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Display",
      cssVariable: "--font-display",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/AbrilFatface-Regular.ttf"],
            weight: "400",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Body",
      cssVariable: "--font-body",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Montserrat-VariableFont_wght.ttf"],
            weight: "200 500",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"],
            weight: "200 500",
            style: "italic",
          },
        ],
      },
    },
  ],
});
