function calculatePositon(path, counter, subtractLength = 0) {
	const length = path.node().getTotalLength()

	return path.node()
		.getPointAtLength((counter * length) - subtractLength)
}

/*
** Returns an array of 5 x, y co-ords
** with the positions for each of the four viruses and the connecting cell
** at the relevant counter/time
*/
function getPositions(counter) {
	const {
		impactStart, impactEnd, connectionPoint
	} = this.progress

	// The default position for all cells is the midpoint
	const positions = new Array(5).fill(
		{
			x: this.midPoint.x * this.width,
			y: this.midPoint.y * this.height
		}
	)

	/*
	** Virus Positions
	** If after impactStart and before impact end viruses are
	** in the centre
	*/
	if (counter <= impactStart) {
		// if the counter is less than 0.25 move the first cell
		// along the entry path

		// at counter = 0 we want to be at 0
		// at counter = 0.25 we want to be at 1 i.e. the full length of the path
		// so multiply counter by 4 ( 1 / 0.25 )

		const multiplier = 1 / impactStart
		const adjustedCounter = counter * multiplier

		positions[0] = calculatePositon(this.paths.entryPath, adjustedCounter)
	} else if (counter >= impactEnd) {
		// if the counter is more than 0.5 move each of the cells
		// along it's relevant path

		// at counter = 0.5 we want to be at 0
		// at counter = 1 we want to be at 0.8
		// Finally multiply by 0.8 so that the viruses are still on screen
		// when the scrolling ends.

		const multiplier = 1 / (1 - impactEnd)
		const adjustedCounter = (counter - impactEnd) * multiplier * 0.8

		positions[0] = calculatePositon(this.paths.exitPathA, adjustedCounter)
		positions[1] = calculatePositon(this.paths.exitPathB, adjustedCounter)
		positions[2] = calculatePositon(this.paths.exitPathC, adjustedCounter)
		positions[3] = calculatePositon(this.paths.exitPathD, adjustedCounter)
	}

	/*
	** Connecting cell position
	*/
	if (counter <= connectionPoint) {
		// at counter = 0 we want to be at 0
		// at counter = 0.75 we want to be at 1 i.e. the full length of the path
		// so multiply counter by 1.33 ( 1 / 0.75 )

		const multiplier = 1 / connectionPoint
		const adjustedCounter = counter * multiplier
		positions[4] = calculatePositon(this.paths.connectingPath, adjustedCounter, 200)
	} else {
		positions[4] = calculatePositon(this.paths.connectingPath, 1, 200)
	}

	return positions
}

export default { getPositions }
