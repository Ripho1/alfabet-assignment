import { observer } from "mobx-react-lite"
import { calculatePotentialProfit } from "../../util"
import { Container } from "../container/Container"
import styles from "./PotentialProfit.module.css"

export const PotentialProfit = observer(({ amountCallback, oddsCallback }) => {
	const amount = amountCallback?.()

	return <Container className={styles.container}>
		<span className={styles.profit}>
			{mapper({ amount, oddsCallback })}
		</span>
	</Container>
})


const mapper = ({ amount, oddsCallback }) => {
	if (amount === 0) {
		return <>Enter a wager first</>
	}

	return <>Potential profit here is: $ <DisplayedProfit amount={amount} oddsCallback={oddsCallback} /></>
}


const DisplayedProfit = observer(({ amount, oddsCallback }) => {
	const odds = oddsCallback?.()
	const profit = calculatePotentialProfit({ amount, odds })

	return <>{profit}</>
})