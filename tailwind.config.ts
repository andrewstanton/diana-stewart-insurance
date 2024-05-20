import type { Config } from "tailwindcss"
import media from "./src/config/media"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  screens: {
    sm: media.sm,
    md: media.md,
    lg: media.lg,
    xl: media.xl,
    "2xl": media["2xl"],
  },
  plugins: [],
}
export default config
