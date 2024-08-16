import { observer } from "mobx-react-lite"
import { useGameStore } from "../../hooks/hooks"
import { Container } from "../container/Container"
import { IoIosRemoveCircleOutline } from "react-icons/io"
import styles from "./BetBuilder.module.css"

export const BetBuilderBet = observer(({ bet }) => {
	const { removeBet } = useGameStore()

	return <Container className={styles.bet}>
		<IoIosRemoveCircleOutline className={styles.remove} size={18} onClick={() => removeBet(bet.id)} />
		<span>
			<span>
				{bet.selected.title}
			</span>
			<span className={styles['bet-title']}>
				{bet.title}
			</span>
		</span>
	</Container>
})