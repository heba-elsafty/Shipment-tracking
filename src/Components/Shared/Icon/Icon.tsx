import Icons from "./IconsSvg.svg"

interface IconProps {
  iconName: string,
  iconColor?: string,
  iconSize?: number,
  className?: string,
  style?: object,
};

const Icon = ({ iconName, iconSize, className, style, iconColor }: IconProps) => {
  return (
    <svg
      className={`icon icon-${iconName} ${className ?? ""}`}
      width={iconSize ?? 20}
      height={iconSize ?? 20}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      fill={iconColor ?? "#28314b"}
    >
      <use xlinkHref={`${Icons}#${iconName}`} />
    </svg>
  )
}

export default Icon;