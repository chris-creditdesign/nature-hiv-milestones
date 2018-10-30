/* eslint-disable no-param-reassign */
import * as PIXI from 'pixi.js'
import updateCanvas from './updateCanvas'

function resizeCanvas(app, counter) {
	const height = document.getElementById('js-pixi-container').offsetHeight

	if ((window.innerWidth !== app.screen.width) || (height !== app.screen.height)) {
		app.renderer.resize(
			window.innerWidth,
			height
		)

		app.stage.children.filter(elem => elem.name !== 'alpha').forEach((elem) => {
			elem.backgroundPositions.updateSvg()
		})

		app.stage.children.filter(elem => elem.name === 'alpha').forEach((container) => {
			container.filterArea = new PIXI.Rectangle(0, 0, app.renderer.width, app.renderer.height)

			container.children.forEach((cell) => {
				cell.x = cell.offSetX * app.renderer.width
				cell.y = cell.offSetY * app.renderer.height
			})
		})

		updateCanvas(app, counter)
	}
}

export default resizeCanvas
