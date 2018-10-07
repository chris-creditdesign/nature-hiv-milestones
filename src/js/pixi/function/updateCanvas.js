const updateCanvas = function(app, counter) {

	app.stage.children.forEach( container => {
		const positions = container.backgroundPositions.getPositions(counter)

		container.children.filter( d => d.name === "virus").forEach( (cell, index) => {
			cell.x = positions[index].x
			cell.y = positions[index].y
		})

		container.children.filter( d => d.name === "cell").forEach( cell => {
			cell.x = container.backgroundPositions.midPoint.x
			cell.y = container.backgroundPositions.midPoint.y

			if (counter > (container.backgroundPositions.impact.end + 0.3)) {
				cell.texture = cell.textures[1]
			} else {
				cell.texture = cell.textures[0]
			}
		})
	})

	// const step = scrollstory._percentScrollToLastItem

	// app.stage.children.filter( d => d.name === "back" || d.name === "front" || d.name === "white").forEach( container => {
	// 	container.children.forEach( cell => {
	// 		if (scrollstory.animationActive) {
	// 			if ( cell.x > app.screen.width / 2) {
	// 				cell.x = cell.startX + (step * (app.screen.width / 2) * cell.speed)
	// 			} else {
	// 				cell.x = cell.startX - (step * (app.screen.width / 2) * cell.speed)
	// 			}
				
	// 			if ( cell.y > app.screen.height / 2) {
	// 				cell.y = cell.startY + (step * (app.screen.height / 2) * cell.speed)
	// 			} else {
	// 				cell.y = cell.startY - (step * (app.screen.height / 2) * cell.speed)
	// 			}

	// 			cell.rotation = cell.startRotation * (step * 2)
					
	// 		} else {
	// 			cell.x = cell.startX
	// 			cell.y = cell.startY
	// 			cell.rotation = cell.startRotation
	// 		}
			
	// 	})
	// })

	// app.stage.children.filter( d => d.name === "rope" || d.name === "white").forEach( container => {
	// 	container.alpha = scrollstory.animationActive ? 
	// 		1 - (1.2 * step) 
	// 		: 1
	// })

	// app.stage.children.filter( d => d.name === "white").forEach( container => {
	// 	container.children.forEach( cell => {
	// 		const scale = scrollstory.animationActive ?
	// 			cell.scaleOffset - (0.5 * step)
	// 			: cell.scaleOffset
			
	// 		cell.scale.set(scale, scale)
	// 	})
	// })
	
}

export default updateCanvas