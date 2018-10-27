const updateSvg = function() {
	if ( (this.height !== document.documentElement.clientHeight) || (this.width !== document.documentElement.clientWidth) ) {

		this.svg.remove()

		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight

		this.init()

	}

	return this
}

export default { updateSvg }