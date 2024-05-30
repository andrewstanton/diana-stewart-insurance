import cns from "classnames"
import "./Hamburger.css"

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
        "hamburger absolute flex justify-center items-center cursor-pointer text-red-500 text-2xl lg:hidden",
        { "bg-black": on }
      )}
    >
      <span aria-hidden="true" />
    </div>
  )
}

export default Hamburger
