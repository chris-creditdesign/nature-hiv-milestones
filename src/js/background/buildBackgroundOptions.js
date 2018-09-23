import makeCoord from '../helpers/makeCoord.js'

const buildBackgroundOptions = data => {

	const options = {}

	options.width = document.documentElement.clientWidth
	options.height = document.documentElement.clientHeight
	options.widthUnit = options.width / 4
	options.heightUnit = options.height / 4

	options.paths = {}
	options.pathLengths = {}

	options.sectors = {}
	options.sectors.a = {min: options.widthUnit * 0, max: options.widthUnit * 1}
	options.sectors.b = {min: options.widthUnit * 1, max: options.widthUnit * 2}
	options.sectors.c = {min: options.widthUnit * 2, max: options.widthUnit * 3}
	options.sectors.d = {min: options.widthUnit * 3, max: options.widthUnit * 4}
	options.sectors.one = {min: options.heightUnit * 0, max: options.heightUnit * 1}
	options.sectors.two = {min: options.heightUnit * 1, max: options.heightUnit * 2}
	options.sectors.three = {min: options.heightUnit * 2, max: options.heightUnit * 3}
	options.sectors.four = {min: options.heightUnit * 3, max: options.heightUnit * 4}

	if (data.orientation === "left" ) {
		options.midPoint = makeCoord(
			{ min: options.widthUnit * 0.4, max: options.widthUnit * 1},
			{ min: options.heightUnit * 0.5, max: options.heightUnit * 3.5}
		)
	} else if (data.orientation === "right" ) {
		options.midPoint = makeCoord(
			{ min: options.widthUnit * 2, max: options.widthUnit * 3},
			{ min: options.heightUnit * 0.5, max: options.heightUnit * 3.5}
		)
	} else {
		options.midPoint = makeCoord(
			{ min: options.widthUnit * 3, max: options.widthUnit * 3.6},
			{ min: options.heightUnit * 0.5, max: options.heightUnit * 3.5}
		)
	}

	options.target = data && data.target || "body"

	return options
}

export default buildBackgroundOptions