import { Container } from "../container/Container"
import styles from "./Button.module.css"

export const Button = ({ containerClassName, className, ...rest }) => {
	return <Container className={`${styles.container} ${containerClassName}`}>
		<button className={`${styles.button} ${className}`} {...rest} />
	</Container>
}