import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface IconProps {
  icon: IconDefinition
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { icon } = props
  return <FontAwesomeIcon icon={icon} />
}

export default Icon
