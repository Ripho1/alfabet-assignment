import style from "./Line.module.css"

export const Line = ({ className, color, size, ...rest }) => {
	return <div className={`${style.line} ${className}`} style={{ color, height: size }} {...rest} />
}