/**
 * Sets a cookie to a given value
 * @param {string} name The name of a cookie
 * @param {string|number} value Thehvalue of the cookie
 * @param {number} exdays Number of days the cookie should be valid for
 */
const set = (name, value, exdays) => {
	if(!exdays) {
		document.cookie = name + "=" + value + ";path=/"
		return;
	}
	const d = new Date()
	d.setTime(d.getTime() + (exdays*24*60*60*1000))
	const expires = "expires="+ d.toUTCString()
	document.cookie = name + "=" + value + ";" + expires + ";path=/"
}

/**
 * Gets the value of a given cookie
 * @param {string} name The name of the cookie
 * @returns {string} The value of the cookie
 */
const get = name => document.cookie.split(name + "=")[1].split(";")[0]

/**
 * Removes a cookie
 * @param {string} name The name of the cookie
 */
const remove = name => {
	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/"
}

/**
 * Checks if a cookie is set
 * @param {string} name The name of the cookie
 * @returns {boolean} True if the cookie is set, false otherwise
 */
const isset = name => document.cookie.split(name + "=")[1] !== undefined

module.exports = {
	set,
	get,
	remove,
	isset
}