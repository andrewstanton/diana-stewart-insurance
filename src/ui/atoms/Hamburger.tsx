import cns from "classnames"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import Icon from "./Icon"

export interface HamburgerProps {
  on?: boolean
  onClick?: () => void
}

const Hamburger: React.FC<HamburgerProps> = (props: HamburgerProps) => {
  const { on, onClick } = props

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      if (onClick) {
        onClick()
      }
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Toggle Navigation"
      onClick={onClick}
      onKeyPress={handleKeyPress}
      className={cns(
        "hamburger absolute right-8 top-1/2 transform -translate-y-1/2 flex justify-center items-center cursor-pointer text-green-500 text-3xl lg:hidden",
        { "bg-black": on }
      )}
    >
      <Icon icon={faBars} />
    </div>
  )
}

export default Hamburger
