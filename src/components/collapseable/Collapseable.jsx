import { useState } from "react"

export const Collapseable = ({ children, headerComp, isVisible, setIsVisible }) => {
	const [visible, setVisible] = useState(isVisible ?? true)

	return <>
		<div onClick={() => {
			if (setIsVisible) {
				setIsVisible(!isVisible)
			} else {
				setVisible(!visible)
			}
		}}>
			{headerComp}
		</div>
		{(isVisible ?? visible) && children}
	</>
}