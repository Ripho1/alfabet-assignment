import { observer } from "mobx-react-lite"
import { useGameStore } from "../../hooks/hooks"
import { EventLine } from "./EventLine"

export const Events = observer(() => {
	const { events } = useGameStore()

	return <>
		{
			events.map(event => <EventLine key={event.id} event={event} />)
		}
	</>
})