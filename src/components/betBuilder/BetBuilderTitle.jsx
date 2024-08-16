import { Container } from "../container/Container"
import { GameTitle } from "../gameHeader/GameTitle"
import { BetBuilderOdds } from "./BetBuilderOdds"
import styles from "./BetBuilder.module.css"

export const BetBuilderTitle = () => {
	return <Container className={styles['title']}>
		<span>
			<GameTitle />
		</span>
		<span>
			<BetBuilderOdds />
		</span>
	</Container>
}