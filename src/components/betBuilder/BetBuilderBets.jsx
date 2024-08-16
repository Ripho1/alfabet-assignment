import React from "react"
import { observer } from "mobx-react-lite"
import { useGameStore } from "../../hooks/hooks"
import { Line } from "../line/Line"
import { BetBuilderBet } from "./betBuilderBet"
import styles from "./BetBuilder.module.css"

export const BetBuilderBets = observer(() => {
	const { betBuilderBets } = useGameStore()

	return <div className={styles.bets}>
		{betBuilderBets.map((bet, index) => {
			return <React.Fragment key={bet.id}>
				<BetBuilderBet bet={bet} />

				{index < betBuilderBets.length - 1 && <Line className={styles.line} />}
			</React.Fragment>
		})}
	</div>
})