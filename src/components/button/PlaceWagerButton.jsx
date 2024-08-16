import { observer } from "mobx-react-lite"
import { Button } from "./Button"
import { useGameStore } from "../../hooks/hooks"
import { MINIMUM_WAGER } from "../../constants"
import styles from "./Button.module.css"

export const PlaceWagerButton = observer(() => {
	const { totalWager, makeWager } = useGameStore()
	const className = totalWager >= MINIMUM_WAGER ? "" : styles.inactive
	
	return <Button className={className} onClick={makeWager}>
		<div>
			ENTER WAGER: ${totalWager}
		</div>
		<div>
			minimum wager is ${MINIMUM_WAGER.toFixed(2)}
		</div> 
	</Button>
})