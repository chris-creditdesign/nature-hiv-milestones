import makeCoord from '../helpers/makeCoord.js'
import randomInt from '../helpers/randomInt.js'

const buildBackgroundPositionOptions = data => {

	const options = {}

	options.width = document.documentElement.clientWidth
	options.height = document.documentElement.clientHeight
	options.widthUnit = options.width / 4
	options.heightUnit = options.height / 4

	options.paths = {}

	options.sectors = {}
	options.sectors.a = {min: options.widthUnit * 0, max: options.widthUnit * 1}
	options.sectors.b = {min: options.widthUnit * 1, max: options.widthUnit * 2}
	options.sectors.c = {min: options.widthUnit * 2, max: options.widthUnit * 3}
	options.sectors.d = {min: options.widthUnit * 3, max: options.widthUnit * 4}
	options.sectors.one = {min: options.heightUnit * 0, max: options.heightUnit * 1}
	options.sectors.two = {min: options.heightUnit * 1, max: options.heightUnit * 2}
	options.sectors.three = {min: options.heightUnit * 2, max: options.heightUnit * 3}
	options.sectors.four = {min: options.heightUnit * 3, max: options.heightUnit * 4}

	options.target = data && data.target || "body"

	options.orientation = data.orientation || "left"

	options.impact = {}
	options.impact.start = randomInt(25,40) / 100
	options.impact.end = randomInt(50,80) / 100


	return options
}

export default buildBackgroundPositionOptions