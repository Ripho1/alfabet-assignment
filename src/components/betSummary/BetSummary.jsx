import { BetBuilder } from "../betBuilder/BetBuilder"
import { BetSingles } from "../betSingle/BetSingles"
import { AddPicksButton } from "../button/AddPicksButton"
import { PlaceWagerButton } from "../button/PlaceWagerButton"
import { BetErrorMessage } from "./BetErrorMessage"
import styles from "./BetSummary.module.css"

export const BetSummary = () => {
	return <>
		<div className={styles.container}>
			<BetBuilder />
			<BetSingles />
			<BetErrorMessage />
			<AddPicksButton />
		</div>
		<PlaceWagerButton />
	</>
}