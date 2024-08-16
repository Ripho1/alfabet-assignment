import { createContext } from "react"
import { RootStore } from "../store/root"

export const StoreContext = createContext(null)

export const Provider = ({ children }) => {
	return <StoreContext.Provider value={RootStore}>
		{children}
	</StoreContext.Provider>
}