import { observer } from "mobx-react-lite"
import { Container } from "../container/Container"

export const Tabs = observer(({ containerClassName, items, selectedID, selectedClassName, onClick }) => {
	return <Container className={containerClassName} >
		{
			items?.map(item =>
				<span
					key={item.id}
					className={item.id === selectedID ? selectedClassName : ''}
					onClick={() => onClick?.(item.id)}>
					{item.name}
				</span>)
		}
	</Container>
})