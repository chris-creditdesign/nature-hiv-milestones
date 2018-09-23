const updateCells = function(counter) {
	
	if (counter <= 0.4) {
		this.entryNucleus
			.attr("cx", this.paths.entryPath.node().getPointAtLength(counter * this.pathLengths.entryPathLength * 2.5).x)
			.attr("cy", this.paths.entryPath.node().getPointAtLength(counter * this.pathLengths.entryPathLength * 2.5).y)
		
		this.entryCell
			.attr("cx", this.paths.entryPath.node().getPointAtLength(counter * this.pathLengths.entryPathLength * 2.5).x)
			.attr("cy", this.paths.entryPath.node().getPointAtLength(counter * this.pathLengths.entryPathLength * 2.5).y)
		
		this.exitNucleusA
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.exitNucleusB
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.exitNucleusC
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.exitNucleusD
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
	} else if (counter > 0.4 && counter <= 0.6) {
		this.entryNucleus
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.entryCell
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.exitNucleusA
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.exitCellA
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.exitNucleusB
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.exitCellB
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)		
		
		this.exitNucleusC
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.exitCellC
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)

		this.exitNucleusD
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.exitCellD
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)		
	} else {
		this.entryNucleus
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.entryCell
			.attr("cx", this.midPoint.x)
			.attr("cy", this.midPoint.y)
		
		this.exitNucleusA
			.attr("cx", this.paths.exitPathA.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathALength * 2.5).x)
			.attr("cy", this.paths.exitPathA.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathALength * 2.5).y)
		
		this.exitCellA
			.attr("cx", this.paths.exitPathA.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathALength * 2.5).x)
			.attr("cy", this.paths.exitPathA.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathALength * 2.5).y)
		
		this.exitNucleusB
			.attr("cx", this.paths.exitPathB.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathBLength * 2.6).x)
			.attr("cy", this.paths.exitPathB.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathBLength * 2.6).y)
		
		this.exitCellB
			.attr("cx", this.paths.exitPathB.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathBLength * 2.6).x)
			.attr("cy", this.paths.exitPathB.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathBLength * 2.6).y)		
		
		this.exitNucleusC
			.attr("cx", this.paths.exitPathC.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathCLength * 2.6).x)
			.attr("cy", this.paths.exitPathC.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathCLength * 2.6).y)
		
		this.exitCellC
			.attr("cx", this.paths.exitPathC.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathCLength * 2.6).x)
			.attr("cy", this.paths.exitPathC.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathCLength * 2.6).y)

		this.exitNucleusD
			.attr("cx", this.paths.exitPathD.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathDLength * 2.6).x)
			.attr("cy", this.paths.exitPathD.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathDLength * 2.6).y)
		
		this.exitCellD
			.attr("cx", this.paths.exitPathD.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathDLength * 2.6).x)
			.attr("cy", this.paths.exitPathD.node().getPointAtLength((counter - 0.6) * this.pathLengths.exitPathDLength * 2.6).y)
		
	}

	return this
}

export default { updateCells }