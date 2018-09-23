import makeCoord from '../helpers/makeCoord.js'
import makePathString from '../helpers/makePathString.js'

const appendPath = function(group, start, controlA, controlB, end, className) {	

	return group.append("path")
		.attr("class", className)
		.attr("d", () => makePathString(start, controlA, controlB, end))
}

const buildPaths = function() {

	const {a, b, c, d, one, two, three, four} = this.sectors

	this.paths.entryPath = appendPath(
		this.pathGroup,
		{ x: 0, y: 0},
		makeCoord(b, one),
		makeCoord(a, two),
		this.midPoint,
		"entry"
	)

	this.paths.exitPathA = appendPath(
		this.pathGroup,
		this.midPoint,
		makeCoord(b, one),
		makeCoord(a, two),
		{ x: 0, y: 0},
		"exit"
	)

	this.paths.exitPathB = appendPath(
		this.pathGroup,
		this.midPoint,
		makeCoord(c, one),
		makeCoord(d, two),
		{ x: this.width, y: 0},
		"exit"
	)

	this.paths.exitPathC = appendPath(
		this.pathGroup,
		this.midPoint,
		makeCoord(d, three),
		makeCoord(c, four),
		{ x: this.width, y: this.height},
		"exit"
	)

	this.paths.exitPathD = appendPath(
		this.pathGroup,
		this.midPoint,
		makeCoord(a, three),
		makeCoord(b, four),
		{ x: 0, y: this.height},
		"exit"
	)

	this.pathLengths.entryPathLength = this.paths.entryPath.node().getTotalLength()
	this.pathLengths.exitPathALength = this.paths.exitPathA.node().getTotalLength()
	this.pathLengths.exitPathBLength = this.paths.exitPathB.node().getTotalLength()
	this.pathLengths.exitPathCLength = this.paths.exitPathC.node().getTotalLength()
	this.pathLengths.exitPathDLength = this.paths.exitPathD.node().getTotalLength()

	return this
}

export default { buildPaths }