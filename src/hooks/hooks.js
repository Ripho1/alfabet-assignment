import { useContext } from "react"
import { StoreContext } from "../context/context"

export const useGameStore = () => {
	const { gameStore } = useContext(StoreContext)

	return gameStore
}

export const useViewStore = () => {
	const { viewStore } = useContext(StoreContext)

	return viewStore
}