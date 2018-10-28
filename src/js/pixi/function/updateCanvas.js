/* eslint-disable no-param-reassign */
function updateCanvas(app, counter) {
	app.stage.children.filter(elem => elem.name !== 'alpha').forEach((container) => {
		const positions = container.backgroundPositions.getPositions(counter)
		const midPoint = {
			x: container.backgroundPositions.midPoint.x * container.backgroundPositions.width,
			y: container.backgroundPositions.midPoint.y * container.backgroundPositions.height
		}

		const {
			impactStart, impactEnd, connectionPoint, displacmentStart
		} = container.backgroundPositions.progress
		const displacmentFilterTotal = 50

		container.children.forEach((innerContainer) => {
			innerContainer.children.filter(d => d.name === 'virus').forEach((cell, index) => {
				cell.x = positions[index].x
				cell.y = positions[index].y
			})

			/*
			** Connecting Cell position
			*/
			innerContainer.children.filter(d => d.name === 'connecting-cell' || d.name === 'connecting-cell-front-infected').forEach((cell) => {
				cell.x = positions[4].x
				cell.y = positions[4].y
			})

			/*
			** Main Cell's position
			*/
			innerContainer.children.filter(d => d.name === 'cell' || d.name === 'cell-front-infected').forEach((cell) => {
				cell.x = midPoint.x
				cell.y = midPoint.y
			})

			/*
			** Opacity of main Cell's infected region
			*/
			innerContainer.children.filter(d => d.name === 'cell-front-infected').forEach((cell) => {
				let progress = 0

				if (counter > impactStart && counter <= impactEnd) {
					const total = (impactEnd - impactStart) * 100
					progress = (counter - impactStart) * 100 / total
				} else if (counter > impactEnd) {
					progress = 1
				}

				cell.alpha = progress
			})

			/*
			** Opacity of connecting Cell's infected region
			*/
			innerContainer.children.filter(d => d.name === 'connecting-cell-front-infected').forEach((cell) => {
				let progress = 0

				if (counter > connectionPoint && counter <= displacmentStart) {
					const total = (displacmentStart - connectionPoint) * 100
					progress = (counter - connectionPoint) * 100 / total
				} else if (counter > displacmentStart) {
					progress = 1
				}

				cell.alpha = progress
			})
		})

		/*
		**	Displacement filter amount
		*/
		if (counter > displacmentStart) {
			const distortion = (counter - displacmentStart) * 10 * displacmentFilterTotal
			container.displacementFilter.scale.x = distortion
			container.displacementFilter.scale.y = distortion
		} else {
			container.displacementFilter.scale.x = 0
			container.displacementFilter.scale.y = 0
		}
	})
}

export default updateCanvas
