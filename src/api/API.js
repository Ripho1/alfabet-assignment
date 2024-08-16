import games from "../mockData/games.json"
import markets from "../mockData/markets.json"
import events from "../mockData/events.json"
import { ENGINE_APPROVAL_RATE } from "../constants"

/**
 * This file mocks server access requests
 */

export const getNextGame = (() => {
	let currentSelected = 0

	return async () => {
		return games[currentSelected++ % games.length]
	}
})()

export const getMarkets = async (gameID = -1) => {
	return markets.filter(market => market.gameID === gameID)
}

export const getEvents = async ({ gameID = -1, marketID = -1 }) => {
	return events
		.filter(event => event.gameID === gameID && event.marketID === marketID)
		.map(event => {
			// If the event has short options they are displayed in line
			if (event.options.every(option => option.title.length === 1)) {
				event.inline = true
			}

			return event
		})
}

export const getEngineApproval = async ({ gameID = -1, marketID = -1, eventID = -1, userID = -1 }) => {
	return Math.random() > ENGINE_APPROVAL_RATE
}