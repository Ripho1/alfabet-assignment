import { observer } from "mobx-react-lite"
import { GameTitle } from "../gameHeader/GameTitle"

export const BetSingleHeader = observer(({ bet, ...rest }) => {
	const optionTitle = bet.selected?.title

	return <span {...rest}> {optionTitle} - {bet.title}, <GameTitle /></span>
})