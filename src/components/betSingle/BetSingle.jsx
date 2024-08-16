import { BetSingleHeader } from "./BetSingleHeader"
import { useGameStore } from "../../hooks/hooks"
import { SingleOdds } from "./SingleOdds"
import { Container } from "../container/Container"
import { BetSinglePotential } from "./BetSinglePotential"
import { SingleMoneyInput } from "./BetSingleMoneyInput"
import { Trash } from "../icons/Trash"
import styles from "./BetSingle.module.css"

export const BetSingle = ({ bet }) => {
	const { removeBet } = useGameStore()

	return <div className={styles.container}>
		<BetSingleHeader className={styles.header} bet={bet} />
		<Trash onClick={() => removeBet(bet.id)} />
		<Container className={styles['footer']}>
			<SingleMoneyInput bet={bet} />
			<SingleOdds bet={bet} />
		</Container>
		<BetSinglePotential bet={bet} />
	</div>
}