import { observer } from "mobx-react-lite"
import { Container } from "../container/Container"
import { displayedOdds } from "../../util"
import styles from "./Event.module.css"

export const EventOption = observer(({ option, inline, onClick, isSelected }) => {
	const className = `${styles['event-option']} ${inline ? styles.block : styles.inline} ${isSelected && styles.selected}`

	return <Container className={className} onClick={() => onClick(option.id)}>
		<span>{option.title}</span>
		<Option option={option} />
	</Container>
})

const Option = observer(({ option }) => {
	return <span>{displayedOdds(option.odds)}</span>
})