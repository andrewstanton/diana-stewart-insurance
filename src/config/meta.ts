export interface INavItem {
  label: string
  url: string
}

const nav: INavItem[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Health Insurance",
    url: "/health-insurance",
  },
  {
    label: "Testimonials",
    url: "/testimonials",
  },
  {
    label: "Contact",
    url: "/contact",
  },
]

export { nav }
