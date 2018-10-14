import makePathString from '../helpers/makePathString.js'

const appendPath = function(group, start, controlA, controlB, end, className) {	

	return group.append("path")
		.attr("class", className)
		.attr("d", () => makePathString(start, controlA, controlB, end))
}

const buildPaths = function() {

	// const {a, b, c, d, one, two, three, four} = this.sectors

	const midPoint = {
		x: this.midPoint.x * this.width,
		y: this.midPoint.y * this.height
	}

	this.paths.entryPath = appendPath(
		this.pathGroup,
		{ x: 0, y: 0},
		{
			x: this.entryPathControlA.x * this.width, 
			y: this.entryPathControlA.y * this.height
		},
		{
			x: this.entryPathControlB.x * this.width, 
			y: this.entryPathControlB.y * this.height	
		},
		midPoint,
		"entry"
	)

	this.paths.exitPathA = appendPath(
		this.pathGroup,
		midPoint,
		{
			x: this.exitPathAControlA.x * this.width, 
			y: this.exitPathAControlA.y * this.height
		},
		{
			x: this.exitPathAControlB.x * this.width, 
			y: this.exitPathAControlB.y * this.height	
		},
		{ x: 0, y: 0},
		"exit"
	)

	this.paths.exitPathB = appendPath(
		this.pathGroup,
		midPoint,
		{
			x: this.exitPathBControlA.x * this.width, 
			y: this.exitPathBControlA.y * this.height
		},
		{
			x: this.exitPathBControlB.x * this.width, 
			y: this.exitPathBControlB.y * this.height	
		},
		{ x: this.width, y: 0},
		"exit"
	)

	this.paths.exitPathC = appendPath(
		this.pathGroup,
		midPoint,
		{
			x: this.exitPathCControlA.x * this.width, 
			y: this.exitPathCControlA.y * this.height
		},
		{
			x: this.exitPathCControlB.x * this.width, 
			y: this.exitPathCControlB.y * this.height	
		},
		{ x: this.width, y: this.height},
		"exit"
	)

	this.paths.exitPathD = appendPath(
		this.pathGroup,
		midPoint,
		{
			x: this.exitPathDControlA.x * this.width, 
			y: this.exitPathDControlA.y * this.height
		},
		{
			x: this.exitPathDControlB.x * this.width, 
			y: this.exitPathDControlB.y * this.height	
		},
		{ x: 0, y: this.height},
		"exit"
	)

	return this
}

export default { buildPaths }