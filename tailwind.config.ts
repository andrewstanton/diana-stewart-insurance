import type { Config } from "tailwindcss"
import colors from "./src/config/colors"
import media from "./src/config/media"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: {
          500: colors.green500,
          700: colors.green700,
        },
        red: {
          500: colors.red500,
        },
        yellow: {
          500: colors.yellow500,
        },
        gray: {
          300: colors.gray300,
          500: colors.gray500,
          700: colors.gray700,
        },
      },
    },
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
