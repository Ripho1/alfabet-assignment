import { MAXIMUM_GAMBLE, MINIMUM_GAMBLE } from "./constants"

export const validateAmount = (amount, lower = MINIMUM_GAMBLE, upper = MAXIMUM_GAMBLE) => {
	const newAmount = Number(amount)
	const response = {
		number: newAmount,
		valid: false
	}

	if (typeof newAmount !== "number" || isNaN(amount)) {
		response.message = "Not a valid amount"
	} else {
		if (newAmount < lower) {
			response.message = "You are attempting to bet too little"
		} else if (newAmount > upper) {
			response.message = "You are attempting to bet too much"
		}
		else {
			response.valid = true
		}
	}

	return response
}

export const calculatePotentialProfit = ({ amount, odds }) => {
	const aResponse = validateAmount(amount)
	const oResponse = validateAmount(odds, -Infinity, Infinity)

	if (aResponse.valid && oResponse.valid) {
		return amount * (odds > 0 ? odds : odds * -0.5)
	}

	return false
}

export const displayedOdds = (odds) => {
	if (odds > 0) {
		return `+${odds}`
	}

	return odds
}