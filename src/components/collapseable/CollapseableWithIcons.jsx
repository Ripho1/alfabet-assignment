import { Container } from "../container/Container"
import { Collapseable } from "./Collapseable"
import { useState } from "react"
import styles from "./Collapse.module.css"

export const CollapseableWithIcons = ({ children, headerComp, closedIcon, openedIcon, headerClassName, closedInfo }) => {
	const [show, setShow] = useState(true)

	return (
		<Collapseable
			isVisible={show}
			setIsVisible={setShow}
			headerComp={
				<Header
					opened={show}
					headerClassName={headerClassName}
					closedIcon={closedIcon}
					headerComp={headerComp}
					openedIcon={openedIcon}
					closedInfo={closedInfo}
				/>
			}
		>
			{children}
		</Collapseable>
	)
}

const Header = ({ headerComp, closedIcon, openedIcon, headerClassName, opened, closedInfo }) => {
	let className = headerClassName
	let info = <></>

	if (!opened) {
		className += ` ${styles.reversed}`

		if (closedInfo) {
			info = closedInfo
		}
	}

	return <Container className={className}>
		{opened ? openedIcon : closedIcon}
		{headerComp}
		{info}
	</Container>
}