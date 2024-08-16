import { observer } from "mobx-react-lite"
import { useGameStore } from "../../hooks/hooks"
import { BetSlipOdds } from "./BetSlipOdds"
import { MINIMUM_TRACKABLE_ODDS } from "../../constants"

export const BetSlipInfoOdds = observer((props) => {
	const { totalBettings } = useGameStore()

	return <span {...props}>
		{mapper({ totalBettings })}
	</span>
})

const mapper = ({ totalBettings }) => {
	if (totalBettings < MINIMUM_TRACKABLE_ODDS) { 
		return <>Add another selection</>
	}
	
	return <BetSlipOdds />
}