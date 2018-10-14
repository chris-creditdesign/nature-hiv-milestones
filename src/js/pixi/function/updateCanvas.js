const updateCanvas = function(app, counter) {

	app.stage.children.filter( elem => elem.name !== "alpha").forEach( container => {
		const positions = container.backgroundPositions.getPositions(counter)
		const midPoint = {
			x: container.backgroundPositions.midPoint.x * container.backgroundPositions.width,
			y: container.backgroundPositions.midPoint.y * container.backgroundPositions.height
		}

		const {start, end} = container.backgroundPositions.impact


		container.children.forEach( innerContainer => {
			innerContainer.children.filter( d => d.name === "virus").forEach( (cell, index) => {
				cell.x = positions[index].x
				cell.y = positions[index].y
			})

			innerContainer.children.filter( d => d.name !== "virus").forEach( (cell, index) => {
				cell.x = midPoint.x
				cell.y = midPoint.y
			})

			innerContainer.children.filter( d => d.name === "cell-front-infected").forEach( cell => {
				let progress = 0
				
				if (counter > start && counter <= end ) {
					const total = (end - start) * 100 
					progress = (counter - start) * 100 / total
				} else if (counter > end) {
					progress = 1
				}

				cell.alpha = progress
			})	
		})
	})
	
}

export default updateCanvas