export default {
	/**
	 * Sets a cookie to a given value
	 * @param {string} name The name of a cookie
	 * @param {string|number} value Thehvalue of the cookie
	 * @param {number} exdays Number of days the cookie should be valid for
	 */
	set: (name, value, exdays = null) => {
		if (name === '') { return }
		if (!exdays) {
			document.cookie = name + '=' + value + ';path=/'
			return;
		}
		const d = new Date()
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
		const expires = 'expires=' + d.toUTCString()
		document.cookie = name + '=' + value + ';' + expires + ';path=/'
	},
	/**
	 * Gets the value of a given cookie
	 * @param {string} name The name of the cookie
	 * @returns {string} The value of the cookie
	 */
	get: name => name !== '' && document.cookie.includes(name + '=') ? document.cookie.split(name + '=')[1].split(';')[0] : null,
	/**
	 * Removes a cookie
	 * @param {string} name The name of the cookie
	 */
	remove: name => {
		if (name !== '' && document.cookie.includes(name + '='))
			document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/'
	},
	/**
	 * Checks if a cookie is set
	 * @param {string} name The name of the cookie
	 * @returns {boolean} True if the cookie is set, false otherwise
	 */
	isset: name => !(name === '') && document.cookie.split(name + '=')[1] !== undefined,
}