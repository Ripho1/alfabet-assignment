import { observer } from "mobx-react-lite"
import { useGameStore } from "../../hooks/hooks"
import { displayedOdds } from "../../util"

export const BetSlipOdds = observer(() => {
	const { totalOdds } = useGameStore()

	return <>{displayedOdds(totalOdds)}</>
})