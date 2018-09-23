const appendCircle = function(group, x, y, radius) {
	return group.append("circle")
		.attr("cx", x)
		.attr("cy", y)
		.attr("r", radius)
}


const buildCells = function() {

	this.entryNucleus = appendCircle(this.nucleusGroup, 0, 0, 5)
	this.entryCell = appendCircle(this.cellGroup, 0, 0, 15)

	this.exitNucleusA = appendCircle(this.nucleusGroup, this.midPoint.x, this.midPoint.y, 5)
	this.exitCellA = appendCircle(this.cellGroup, this.midPoint.x, this.midPoint.y, 15)

	this.exitNucleusB = appendCircle(this.nucleusGroup, this.midPoint.x, this.midPoint.y, 5)
	this.exitCellB = appendCircle(this.cellGroup, this.midPoint.x, this.midPoint.y, 15)

	this.exitNucleusC = appendCircle(this.nucleusGroup, this.midPoint.x, this.midPoint.y, 5)
	this.exitCellC = appendCircle(this.cellGroup, this.midPoint.x, this.midPoint.y, 15)	

	this.exitNucleusD = appendCircle(this.nucleusGroup, this.midPoint.x, this.midPoint.y, 5)
	this.exitCellD = appendCircle(this.cellGroup, this.midPoint.x, this.midPoint.y, 15)

	this.tcellNucleus = appendCircle(this.nucleusGroup, this.midPoint.x, this.midPoint.y, 30)
	this.tcellCell = appendCircle(this.cellGroup, this.midPoint.x, this.midPoint.y, 100)	

	return this
}

export default { buildCells }