import { observer } from "mobx-react-lite"
import { useGameStore } from "../../hooks/hooks"
import { BetSingle } from "./BetSingle"
import { CollapseableEvent } from "../collapseable/CollapseableEvent"

export const BetSingles = observer(() => {
	const { getBets } = useGameStore()

	return <CollapseableEvent headerComp={"SINGLES"}>
		{getBets.map(bet => <BetSingle key={bet.id} bet={bet} />)}
	</CollapseableEvent>
})