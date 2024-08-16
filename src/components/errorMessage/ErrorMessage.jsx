import { Container } from "../container/Container"
import styles from "./ErrorMessage.module.css"

export const ErrorMessage = ({ children, className, ...rest }) => {
	return <Container className={`${styles.error} ${className}`} {...rest}>
		{children}
	</Container>
}