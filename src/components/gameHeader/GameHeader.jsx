import { Container } from "../container/Container"
import { GameTitle } from "./GameTitle"
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io"
import { useGameStore } from "../../hooks/hooks"
import styles from "./GameHeader.module.css"

export const GameHeader = ({ className = "" }) => {
	const { nextGame } = useGameStore()

	return <Container className={`${styles['game-header']} ${className}`}>
		<IoIosArrowBack className={styles.back} onClick={nextGame} />
		<p className={styles['game-title']}>
			<GameTitle />
		</p>
		<IoIosArrowDown className={styles.down} />
	</Container>
}
