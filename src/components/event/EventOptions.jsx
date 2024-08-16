import { useCallback } from "react"
import { observer } from "mobx-react-lite"
import { useGameStore } from "../../hooks/hooks"
import { EventOption } from "./EventOption"
import { Container } from "../container/Container"
import styles from "./Event.module.css"

export const EventOptions = observer(({ event: { options, inline, id: eventID, selected } }) => {
	const { onEventClick } = useGameStore()

	const onOptionClick = useCallback((optionID) => {
		onEventClick({ eventID, optionID })
	}, [eventID])
	
	const className = `${styles['event-options']} ${inline ? styles.inline : styles.block}`

	return <Container className={className}>
		{options.map(option =>
			<EventOption
				key={option.id}
				option={option}
				inline={inline}
				onClick={onOptionClick}
				isSelected={option.id === selected?.id}
			/>
		)}
	</Container>
})