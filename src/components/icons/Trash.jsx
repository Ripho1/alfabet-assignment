import { FaTrashAlt } from "react-icons/fa"
import styles from "./Icons.module.css"

export const Trash = ({ onClick }) => {
	return <div className={styles.trash}>
		<FaTrashAlt className={styles['trash-icon']} size={20} onClick={onClick} />
	</div>
}