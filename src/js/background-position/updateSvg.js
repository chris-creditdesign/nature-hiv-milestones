const updateSvg = function() {
	if ( (this.height !== document.documentElement.clientHeight) || (this.width !== document.documentElement.clientWidth) ) {
		// this.totalHeight = window.innerHeight
		// this.height = this.totalHeight - this.margins.top - this.margins.bottom;

		this.svg.remove()

		this.width = document.documentElement.clientWidth
		this.height = document.documentElement.clientHeight
		// this.widthUnit = this.width / 4
		// this.heightUnit = this.height / 4

		// this.sectors.a = {min: this.widthUnit * 0, max: this.widthUnit * 1}
		// this.sectors.b = {min: this.widthUnit * 1, max: this.widthUnit * 2}
		// this.sectors.c = {min: this.widthUnit * 2, max: this.widthUnit * 3}
		// this.sectors.d = {min: this.widthUnit * 3, max: this.widthUnit * 4}
		// this.sectors.one = {min: this.heightUnit * 0, max: this.heightUnit * 1}
		// this.sectors.two = {min: this.heightUnit * 1, max: this.heightUnit * 2}
		// this.sectors.three = {min: this.heightUnit * 2, max: this.heightUnit * 3}
		// this.sectors.four = {min: this.heightUnit * 3, max: this.heightUnit * 4}

		this.init()

	}

	return this
}

export default { updateSvg }