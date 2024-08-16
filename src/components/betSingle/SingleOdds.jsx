import { observer } from "mobx-react-lite"
import { displayedOdds } from "../../util"

export const SingleOdds = observer(({ bet }) => {
	const odds = bet.selected?.odds
	const toDisplay = displayedOdds(odds)

	return <span>{toDisplay}</span>
})