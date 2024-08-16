import { Container } from "../container/Container"
import { GameHeader } from "../gameHeader/GameHeader"
import { Markets } from "../markets/Markets"
import { Events } from "../event/Events"
import { BetSlip } from "../betSlip/BetSlip"
import { useGameStore, useViewStore } from "../../hooks/hooks"
import { observer } from "mobx-react-lite"
import { IoToggle } from "react-icons/io5"
import styles from "./Game.module.css"

export const Game = observer(() => {
	const { showSlip } = useGameStore()
	const { viewPayments } = useViewStore()
	const className = `${styles['container']} ${showSlip && styles.contained}`

	return <>
		<GameHeader />
		<div className={className}>
			<div className={styles['game-data']}>
				Game Data
			</div>
			<Container className={styles['bet-builder']}>
				<span>
					BET BUILDER
				</span>
				<IoToggle size={26} className={styles.toggle}/>
			</Container>
			<Markets />
			<Events />
		</div>
		{showSlip && <BetSlip onClick={viewPayments} />}
	</>
})