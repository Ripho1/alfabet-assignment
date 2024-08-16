import { observer } from "mobx-react-lite"
import { displayedOdds } from "../../util"
import { useGameStore } from "../../hooks/hooks"

export const BetBuilderOdds = observer(() => {
	const { totalBuilderOdds } = useGameStore()

	return <>{displayedOdds(totalBuilderOdds)}</>
})