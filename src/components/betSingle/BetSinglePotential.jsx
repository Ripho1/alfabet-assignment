import { PotentialProfit } from "../betSummary/PotentialProfit"

export const BetSinglePotential = ({ bet }) => {
	return <PotentialProfit amountCallback={() => bet.amount} oddsCallback={() => bet.selected.odds} />
}