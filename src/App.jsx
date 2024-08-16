import { observer } from 'mobx-react-lite'
import { useViewStore } from './hooks/hooks'
import { Game } from './components/game/Game'
import { BetSummary } from './components/betSummary/BetSummary'
import { VIEWS } from './constants'

const App = observer(() => {
	const { currentView } = useViewStore()

	if (currentView === VIEWS.GAME) {
		return <Game />
	}

	return <BetSummary />
})

export default App