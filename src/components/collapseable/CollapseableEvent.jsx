import { IoIosArrowDown } from "react-icons/io"
import { CollapseableWithIcons } from "./CollapseableWithIcons"
import styles from "./Collapse.module.css"

export const CollapseableEvent = ({ children, headerComp, closedAdditionalInfo }) => {
	return <CollapseableWithIcons
		headerClassName={styles.header}
		openedIcon={<IoIosArrowDown className={styles.opened} />}
		closedIcon={<ClosedIcon />}
		headerComp={headerComp}
		closedInfo={closedAdditionalInfo}
	>
		{children}
	</CollapseableWithIcons>
}

const ClosedIcon = () => {
	return <span className={styles.closed}>
		<span className={styles['text-closed']}>
			Expand
		</span>
		<IoIosArrowDown className={styles['closed-icon']}/>
	</span>
}