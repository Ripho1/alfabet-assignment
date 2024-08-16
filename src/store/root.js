import { GameStore } from "./gameStore"
import { ViewStore } from "./viewStore"

class Store {
	constructor() {
		this.gameStore = new GameStore(this)
		this.viewStore = new ViewStore(this)
	}
}

export const RootStore = new Store()