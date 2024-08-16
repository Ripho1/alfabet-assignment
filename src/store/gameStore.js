import { action, makeAutoObservable, runInAction } from "mobx"
import { validateAmount } from "../util"
import { getEngineApproval, getEvents, getMarkets, getNextGame } from "../api/API"
import { MINIMUM_BET_BUILDER_SIZE, MINIMUM_SLIP_BETS, MINIMUM_WAGER } from "../constants"

/**
 * Main app store, has all the data
 */
export class GameStore {
	game = {}
	markets = []
	events = []
	betBuilderAmount = 0
	bets = []
	selectedMarketID = -1

	constructor(rootStore) {
		makeAutoObservable(this)
		this.rootStore = rootStore

		this.nextGame()
	}

	// Loading data to the screen
	nextGame = async () => {
		this.resetData()

		const game = await getNextGame()
		runInAction(() => {
			this.game = game
		})

		const markets = await getMarkets(game.id)
		runInAction(() => {
			this.markets = markets
		})
	}

	resetData = () => {
		this.game = {}
		this.selectedMarketID = -1
		this.markets = []
		this.events = []
		this.bets = []
	}

	get gameTitle() {
		return `${this.game.team1} VS ${this.game.team2}`
	}

	get getBets() {
		return this.bets.filter(bet => bet)
	}

	get totalBettings() {
		return this.getBets.reduce((total, current) => {
			if (current.selected) {
				total += 1
			}

			return total
		}, 0)
	}

	// Probably not how odds calculations work in real life
	get totalOdds() {
		return this.getBets.reduce((total, current) => {
			if (current.selected) {
				total += current.selected.odds
			}

			return total
		}, 0)
	}

	get totalBuilderOdds() {
		return this.getBets.reduce((total, current) => {
			if (current.selected && !current.cannotBeCombined) {
				total += current.selected.odds
			}

			return total
		}, 0)
	}

	get betBuilderBets() {
		return this.getBets.filter(bet => !bet.cannotBeCombined)
	}

	get totalWager() {
		return this.getBets.reduce((sum, current) => {
			if (current.amount) {
				sum += current.amount
			}

			return sum
		}, 0) + this.betBuilderAmount
	}

	get showSlip() {
		return this.totalBettings >= MINIMUM_SLIP_BETS
	}

	get isValidBuilder() {
		return this.betBuilderBets.length >= MINIMUM_BET_BUILDER_SIZE
	}

	selectMarket = async (id = -1) => {
		this.selectedMarketID = id

		// Load events based on market of the current game
		const events = await getEvents({ gameID: this.game.id, marketID: this.selectedMarketID })
		runInAction(() => {
			this.events = events
		})

		this.events.forEach(event => {
			const bet = this.bets[event.id]

			if (bet) {
				event.selected = bet.selected
			}
		})
	}

	/**
	 * Pressing the same option twice removes it from the bet slip,
	 * otherwise adding that option as a bet
	 */
	onEventClick = async ({ eventID = -1, optionID = -1 }) => {
		const gameID = this.game.id
		const marketID = this.selectedMarketID
		const event = this.events.find(event =>
			event.gameID === gameID &&
			event.marketID === marketID &&
			event.id === eventID
		)

		// Removes the bet
		if (this.bets[eventID]?.selected?.id === optionID) {
			this.bets[eventID] = undefined
			event.selected = undefined
		} else {
			// Adds the bet
			const isApproved = await getEngineApproval({ gameID, marketID, eventID })

			if (!isApproved) {
				alert("blocked by engine from placting this bet")
			} else {
				runInAction(() => {
					event.selected = event.options.find(option => option.id === optionID)
					event.amount = 0
					this.bets[eventID] = event
				})

				if (event.cannotBeCombined) {
					alert("This betting cannot be combined into the Bet Builder, it will only be betable as single")
				}
			}
		}
	}

	updateAmount = ({ bet, amount }) => {
		const response = validateAmount(amount)

		if (!response.valid) {
			alert(response.message)
		} else {
			bet.amount = response.number
		}
	}

	addDollar = (bet) => {
		this.updateAmount({ bet, amount: bet.amount + 1 })
	}

	removeDollar = (bet) => {
		this.updateAmount({ bet, amount: bet.amount - 1 })
	}

	updateBuilderAmount = (amount) => {
		const response = validateAmount(amount)

		if (!response.valid) {
			alert(response.message)
		} else {
			this.betBuilderAmount = response.number
		}
	}

	addDollarBuilder = () => {
		this.updateBuilderAmount(this.betBuilderAmount + 1)
	}

	removeDollarBuilder = () => {
		this.updateBuilderAmount(this.betBuilderAmount - 1)
	}

	removeBet = (eventID) => {
		const bet = this.bets[eventID]

		if (bet) {
			bet.selected = undefined
			bet.amount = 0
			this.bets[eventID] = undefined
		}
	}

	removeAllBets = () => {
		this.bets = []
		this.events.forEach((event) => {
			event.selected = undefined
			event.amount = 0
		})
	}

	/**
	 * This is the theoretical send wager 
	 */
	makeWager = () => {
		if (this.totalWager >= MINIMUM_WAGER) {
			const eventsToSend = this.getBets.map(bet => {
				return {
					eventID: bet.id,
					gameID: bet.gameID,
					amount: bet.amount
				}
			})

			// API.send(eventsToSend, this.betBuilderAmount)

			alert("Wager sent successfully!")
		}
	}
}