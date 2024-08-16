import { observer } from "mobx-react-lite"
import { useGameStore } from "../../hooks/hooks"

export const Selecteds = observer((props) => {
	const { totalBettings } = useGameStore()

	return <span {...props}>
		{totalBettings}
	</span>
})