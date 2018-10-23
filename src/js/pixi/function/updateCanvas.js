const updateCanvas = function(app, counter) {

	app.stage.children.filter( elem => elem.name !== "alpha").forEach( container => {
		const positions = container.backgroundPositions.getPositions(counter)
		const midPoint = {
			x: container.backgroundPositions.midPoint.x * container.backgroundPositions.width,
			y: container.backgroundPositions.midPoint.y * container.backgroundPositions.height
		}

		const impactStart = container.backgroundPositions.impact.start
		const impactEnd = container.backgroundPositions.impact.end

		if (counter > 0.9) {
			const distortion = (counter - 0.9) * 10 * 50
			container.filters[0].scale.x = distortion
			container.filters[0].scale.y = distortion
		} else {
			container.filters[0].scale.x = 0
			container.filters[0].scale.y = 0
		}


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
				
				if (counter > impactStart && counter <= impactEnd ) {
					const total = (impactEnd - impactStart) * 100 
					progress = (counter - impactStart) * 100 / total
				} else if (counter > impactEnd) {
					progress = 1
				}

				cell.alpha = progress
			})	
		})
	})
	
}

export default updateCanvas