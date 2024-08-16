import { EventOptions } from "./EventOptions"
import { CollapseableEvent } from "../collapseable/CollapseableEvent"

export const EventLine = ({ event }) => {
	return <div>
		<CollapseableEvent headerComp={event.title} closedAdditionalInfo={` (${event.options.length})`}>
			<EventOptions event={event} />
		</CollapseableEvent>
	</div>
}