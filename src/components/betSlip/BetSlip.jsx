import { Container } from "../container/Container"
import { BetSlipInfoOdds } from "./BetSlipInfoOdds"
import { Selecteds } from "./BetSlipSelecteds"
import styles from "./BetSlip.module.css"

export const BetSlip = ({ className, ...rest }) => {
	return <Container className={styles.slip} {...rest}>
		<Container className={styles.left}>
			<Selecteds className={styles.selected} />
			<span>Bet Slip</span>
		</Container>
		<BetSlipInfoOdds className={styles.odds} />
	</Container>
}