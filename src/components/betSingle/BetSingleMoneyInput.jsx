import { useGameStore } from "../../hooks/hooks"
import { MoneyInputWithIcons } from "../moneyInput/MoneyInput"

export const SingleMoneyInput = ({ bet }) => {
	const { updateAmount, addDollar, removeDollar } = useGameStore()

	return <MoneyInputWithIcons
		getValue={() => bet.amount}
		setValue={(newAmount) => updateAmount({ amount: newAmount, bet })}
		onMinus={() => removeDollar(bet)}
		onPlus={() => addDollar(bet)}
	/>
}