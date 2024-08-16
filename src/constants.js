export const MINIMUM_WAGER = 1

export const MINIMUM_GAMBLE = 0
export const MAXIMUM_GAMBLE = 9999

export const MINIMUM_TRACKABLE_ODDS = 2
export const MINIMUM_SLIP_BETS = 1

export const MINIMUM_BET_BUILDER_SIZE = 2

export const VIEWS = {
	GAME: "Game",
	PAYMENTS: "Payments"
}

/**
 * Value should be 0 <= value <= 1. The higher it is the more likely a bet is to be declined by the engine
 */
export const ENGINE_APPROVAL_RATE = 0.05