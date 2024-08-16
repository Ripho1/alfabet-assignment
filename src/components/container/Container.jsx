import styles from "./Container.module.css"

export const Container = ({ className = "", children, ...rest }) => {
	return <div className={`${styles.container} ${className}`} {...rest}>
		{children}
	</div>
}