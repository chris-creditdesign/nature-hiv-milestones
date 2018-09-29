import makeCoord from '../helpers/makeCoord.js'

const buildMidpoint = function() {

	if (this.orientation === "left" ) {
		this.midPoint = makeCoord(
			{ min: this.widthUnit * 0.4, max: this.widthUnit * 1},
			{ min: this.heightUnit * 0.5, max: this.heightUnit * 3.5}
		)
	} else if (this.orientation === "right" ) {
		this.midPoint = makeCoord(
			{ min: this.widthUnit * 2, max: this.widthUnit * 3},
			{ min: this.heightUnit * 0.5, max: this.heightUnit * 3.5}
		)
	} else {
		this.midPoint = makeCoord(
			{ min: this.widthUnit * 3, max: this.widthUnit * 3.6},
			{ min: this.heightUnit * 0.5, max: this.heightUnit * 3.5}
		)
	}

	return this 
}

export default { buildMidpoint }