import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { Container } from "../container/Container"
import { BsCurrencyDollar } from "react-icons/bs"
import { observer } from "mobx-react-lite"
import { MAXIMUM_GAMBLE, MINIMUM_GAMBLE } from "../../constants"
import styles from "./MoneyInput.module.css"

export const MoneyInput = observer(({ getValue, setValue }) => {
	return <input
		className={styles.input}
		type='number'
		min={MINIMUM_GAMBLE}
		max={MAXIMUM_GAMBLE} 
		value={getValue()}
		onChange={(e) => setValue(e.target.value)}
	/>
})

export const MoneyInputWithIcons = ({ getValue, setValue, onPlus, onMinus }) => {
	return <Container className={styles.container}>
		<FaMinusCircle onClick={onMinus} size={19}/>
		<BsCurrencyDollar size={10} />
		<MoneyInput getValue={getValue} setValue={setValue} />
		<FaPlusCircle onClick={onPlus} size={19}/>
	</Container>
}