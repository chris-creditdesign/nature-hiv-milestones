// import makeCoord from '../helpers/makeCoord.js'
import randomInt from '../helpers/randomInt.js'

const buildBackgroundPositionOptions = data => {

	const options = {}

	options.width = document.documentElement.clientWidth
	options.height = document.documentElement.clientHeight
	// options.widthUnit = options.width / 4
	// options.heightUnit = options.height / 4

	options.paths = {}

	// options.sectors = {}
	// options.sectors.a = {
	// 	min: 0.25 * 0, 
	// 	max: 0.25 * 1
	// }
	// options.sectors.b = {
	// 	min: 0.25 * 1, 
	// 	max: 0.25 * 2
	// }
	// options.sectors.c = {
	// 	min: 0.25 * 2, 
	// 	max: 0.25 * 3
	// }
	// options.sectors.d = {
	// 	min: 0.25 * 3, 
	// 	max: 0.25 * 4
	// }
	// options.sectors.one = {
	// 	min: 0.25 * 0, 
	// 	max: 0.25 * 1}
	// options.sectors.two = {
	// 	min: 0.25 * 1,
	// 	max: 0.25 * 2
	// }
	// options.sectors.three = {
	// 	min: 0.25 * 2,
	// 	max: 0.25 * 3
	// }
	// options.sectors.four = {
	// 	min: 0.25 * 3, 
	// 	max: 0.25 * 4
	// }

	options.entryPathControlA = {
		x: randomInt(25,50) / 100,
		y: randomInt(0,25) / 100
	}
	// makeCoord(b, one),
	options.entryPathControlB = {
		x: randomInt(0,25) / 100,
		y: randomInt(25,50) / 100
	}
	// makeCoord(a, two),

	options.exitPathAControlA = {
		x: randomInt(25,50) / 100,
		y: randomInt(0,25) / 100
	}
	// makeCoord(b, one)
	options.exitPathAControlB = {
		x: randomInt(0,25) / 100,
		y: randomInt(25,50) / 100
	}
	// makeCoord(a, two)

	options.exitPathBControlA = {
		x: randomInt(50,75) / 100,
		y: randomInt(0,25) / 100
	}
	// makeCoord(c, one),
	options.exitPathBControlB = {
		x: randomInt(75,100) / 100,
		y: randomInt(25,50) / 100
	}
	// makeCoord(d, two),

	options.exitPathCControlA = {
		x: randomInt(75,100) / 100,
		y: randomInt(50,75) / 100
	}
	// makeCoord(d, three),
	options.exitPathCControlB = {
		x: randomInt(50,75) / 100,
		y: randomInt(75,50) / 100
	}
	// makeCoord(c, four),

	options.exitPathDControlA = {
		x: randomInt(0,25) / 100,
		y: randomInt(50,75) / 100
	}
	// makeCoord(a, three),
	options.exitPathDControlB = {
		x: randomInt(25,50) / 100,
		y: randomInt(75,100) / 100
	}
	// makeCoord(b, four),

	options.target = data && data.target || "body"

	options.orientation = data.orientation || "left"

	options.impact = {}
	options.impact.start = randomInt(20,50) / 100
	options.impact.end = randomInt(60,85) / 100

	options.midPoint = {}
	options.midPoint.y = randomInt(15, 85) / 100

	if (options.orientation === "left" ) {
		options.midPoint.x = randomInt(10, 25) / 100
	} else if (options.orientation === "right") {
		options.midPoint.x = randomInt(75, 90) / 100
	}



	return options
}

export default buildBackgroundPositionOptions