import { makeAutoObservable } from "mobx"
import { VIEWS } from "../constants"

/**
 * Storing current view
 */
export class ViewStore {
	currentView = VIEWS.GAME

	constructor(rootStore) {
		makeAutoObservable(this)
		this.rootStore = rootStore
	}

	viewPayments = () => {
		this.currentView = VIEWS.PAYMENTS
	}

	viewGame = () => {
		this.currentView = VIEWS.GAME
	}
}