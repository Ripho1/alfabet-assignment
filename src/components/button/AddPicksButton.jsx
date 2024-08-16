import { useViewStore } from "../../hooks/hooks"
import { Button } from "./Button"
import styles from "./Button.module.css"

export const AddPicksButton = () => {
	const { viewGame } = useViewStore()

	return <Button className={styles.add} onClick={viewGame}>
		ADD PICKS
	</Button>
}
