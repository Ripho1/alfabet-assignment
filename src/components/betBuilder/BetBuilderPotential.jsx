import { PotentialProfit } from "../betSummary/PotentialProfit"
import { useGameStore } from "../../hooks/hooks"

export const BetBuilderPotential = () => {
	const store = useGameStore()

	return <PotentialProfit
		amountCallback={() => store.betBuilderAmount}
		oddsCallback={() => store.totalBuilderOdds}
	/>
}