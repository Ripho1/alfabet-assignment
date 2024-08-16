import { observer } from "mobx-react-lite"
import { Tabs } from "./Tabs"
import { useGameStore } from "../../hooks/hooks"
import styles from "./Markets.module.css"

export const Markets = observer(() => {
	const { markets, selectedMarketID, selectMarket } = useGameStore()

	return <Tabs
		containerClassName={styles.markets}
		items={markets}
		selectedID={selectedMarketID}
		selectedClassName={styles.selected}
		onClick={selectMarket}
	/>
})