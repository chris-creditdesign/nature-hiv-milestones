import * as PIXI from 'pixi.js'
import Container from '../class/Container'
import Virus from '../class/Virus'
import Cell from '../class/Cell'
import updateCanvas from './updateCanvas'

const onAssetsLoaded = function(app, resources, jsonURl) {
	
	const ticker = new PIXI.ticker.Ticker()
	let alpha = 0

	const textures = resources[jsonURl].textures

	const cellContainerLeftAlpha = new Container("#bg-container", "left", "cell", 0.2)
	const cellContainerRightAlpha = new Container("#bg-container", "right", "cell", 0.3)
	const cellContainerCentreAlpha = new Container("#bg-container", "centre", "cell", 0.5)
	const cellContainerLeft = new Container("#bg-container", "left", "cell", 1)
	const cellContainerRight = new Container("#bg-container", "right", "cell", 1)
	const cellContainerCenter = new Container("#bg-container", "centre", "cell", 1)
	
	app.stage.addChild(	cellContainerLeftAlpha,
						cellContainerRightAlpha,
						cellContainerCentreAlpha,
						cellContainerLeft,
						cellContainerRight,
						cellContainerCenter )

	app.stage.children.forEach( container => {
		Array.from({length: 4}).forEach( () => {
			const virus = new Virus(app, textures)
			container.addChild(virus)
		})

		container.addChild( new Cell(app, textures) )
	})

	console.log(cellContainerLeft)

	ticker.add((deltaTime) => {
		alpha += 0.05
		alpha >= 1 ?
			ticker.stop()
			: app.stage.alpha = alpha
	});

	ticker.start();
}

export default onAssetsLoaded


