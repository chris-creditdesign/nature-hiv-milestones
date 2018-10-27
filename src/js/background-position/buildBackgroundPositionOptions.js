// import makeCoord from '../helpers/makeCoord.js'
import randomInt from '../helpers/randomInt.js'

const buildBackgroundPositionOptions = data => {

	const options = {}

	options.width = document.documentElement.clientWidth
	options.height = document.documentElement.clientHeight

	options.paths = {}

	/* ENTRY PATH */
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

	/* EXIT PATH A */
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

	/* EXIT PATH B */
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

	/* EXIT PATH C */
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

	/* EXIT PATH D */
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

	// Used to control events on the timeline
	// i.e. when things happen
	options.progress = {
		impactStart: randomInt(20,30) / 100,
		impactEnd: randomInt(40,60) / 100,
		connectionPoint: randomInt(70,80) / 100,
		displacmentStart: randomInt(85,95) / 100
	}

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