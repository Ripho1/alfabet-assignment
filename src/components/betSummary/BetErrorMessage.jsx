import { observer } from "mobx-react-lite"
import { ErrorMessage } from "../errorMessage/ErrorMessage"
import { useGameStore } from "../../hooks/hooks"
import { MINIMUM_BET_BUILDER_SIZE } from "../../constants"
import styles from "./BetSummary.module.css"

export const BetErrorMessage = observer(() => {
	const { isValidBuilder, betBuilderBets } = useGameStore()

	return <ErrorMessage>
		{mapper({ isValidBuilder, bettings: betBuilderBets.length })}
	</ErrorMessage>
})

const mapper = ({ isValidBuilder, bettings }) => {
	const missing = MINIMUM_BET_BUILDER_SIZE - bettings

	if (isValidBuilder) {
		return <></>
	}

	if (missing === 1 ) {
		return <span className={styles.error}>Add 1 more pick for a valid bet builder</span>
	}
	
	return <span className={styles.error}>Add {missing} more picks for a valid bet builder</span>
}