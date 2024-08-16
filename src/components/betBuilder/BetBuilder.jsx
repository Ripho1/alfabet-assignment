import { observer } from "mobx-react-lite"
import { useGameStore } from "../../hooks/hooks"
import { Trash } from "../icons/Trash"
import { BetBuilderHeader } from "./BetBuilderHeader"
import { BetBuilderMoneyInput } from "./BetBuilderMoneyInput"
import { BetBuilderPotential } from "./BetBuilderPotential"
import { BetBuilderTitle } from "./BetBuilderTitle"
import { BetBuilderBets } from "./BetBuilderBets"
import { CollapseableEvent } from "../collapseable/CollapseableEvent"

export const BetBuilder = observer(() => {
	const { removeAllBets, isValidBuilder } = useGameStore()

	return isValidBuilder && (
		<CollapseableEvent headerComp={"BET BUILDER"}>
			<BetBuilderHeader />
			<BetBuilderTitle />
			<BetBuilderBets />
			<Trash onClick={removeAllBets} />
			<BetBuilderMoneyInput />
			<BetBuilderPotential />
		</CollapseableEvent>
	)
})