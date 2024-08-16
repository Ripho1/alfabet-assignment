import { useGameStore } from "../../hooks/hooks"
import { MoneyInputWithIcons } from "../moneyInput/MoneyInput"

export const BetBuilderMoneyInput = () => {
	const store = useGameStore()
	const { updateBuilderAmount, removeDollarBuilder, addDollarBuilder } = store

	return <MoneyInputWithIcons
		getValue={() => store.betBuilderAmount}
		setValue={(newAmount) => updateBuilderAmount(newAmount)}
		onMinus={() => removeDollarBuilder()}
		onPlus={() => addDollarBuilder()}
	/>
}