import { observer } from "mobx-react-lite"
import { useGameStore } from "../../hooks/hooks"

export const GameTitle = observer(() => {
	const { gameTitle } = useGameStore()

	return <>
		{gameTitle}
	</>
})