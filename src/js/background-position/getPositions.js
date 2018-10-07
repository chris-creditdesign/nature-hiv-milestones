const calculatePositon = (path, counter) => {
	const length = path.node().getTotalLength()

	return path.node()
				.getPointAtLength(counter * length)
}

const getPositions = function(counter) {

	// The default position for all cells is the midpoint
	const positions = new Array(4).fill(
			{ 
				x: this.midPoint.x, 
				y: this.midPoint.y 
			} 
		)

	if (counter <= this.impact.start) {
		// if the counter is less than 0.4 move the first cell 
		// along the entry path

		// at counter = 0 we want to be at 0
		// at counter = 0.4 we want to be at 1 i.e. the full length of the path
		// so multiply counter by 2.5

		const entryPoint = this.impact.start
		const multiplier = 1 / entryPoint
		const adjustedCounter = counter * multiplier

		positions[0] = calculatePositon(this.paths.entryPath, adjustedCounter)
		
	} else if ( counter >= this.impact.end) {

		// if the counter is more than 0.6 move each of the cells 
		// along it's relevant path

		// at counter = 0.6 we want to be at 0
		// at counter = 1 we want to be at 1
		// Finally multiply by 0.4 so that the viruses are still on screen
		// when the scrolling ends. 

		const exitPoint = this.impact.end
		const multiplier = 1 / (1 - exitPoint)
		const adjustedCounter = (counter - exitPoint) * multiplier * 0.4

		positions[0] = calculatePositon(this.paths.exitPathA, adjustedCounter)
		positions[1] = calculatePositon(this.paths.exitPathB, adjustedCounter)
		positions[2] = calculatePositon(this.paths.exitPathC, adjustedCounter)
		positions[3] = calculatePositon(this.paths.exitPathD, adjustedCounter)
		
	}

	return positions
}

export default { getPositions }