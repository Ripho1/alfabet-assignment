import { observer } from "mobx-react-lite"
import { useGameStore } from "../../hooks/hooks"
import { Container } from "../container/Container"
import styles from "./BetBuilder.module.css"

export const BetBuilderHeader = observer(() => {
	const { betBuilderBets } = useGameStore()

	return <Container className={styles.header}>
		<span>
			{betBuilderBets.length} SELECTIONS
		</span>
	</Container>
})