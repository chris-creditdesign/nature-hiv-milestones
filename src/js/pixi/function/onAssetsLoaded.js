import * as PIXI from 'pixi.js'
import Container from '../class/Container'
import AlphaContainer from '../class/AlphaContainer'
import Virus from '../class/Virus'
import Cell from '../class/Cell'
import updateCanvas from './updateCanvas'

import randomInt from '../../helpers/randomInt.js'

const onAssetsLoaded = function(app, resources, jsonURl) {
	
	const ticker = new PIXI.ticker.Ticker()
	let alpha = 0
	const {width, height} = app.renderer

	const textures = resources[jsonURl].textures

	const cellContainerLeftA = new Container("#bg-container", "left", "cell", 0.2)
	const cellContainerRightA = new Container("#bg-container", "right", "cell", 0.3)
	const cellContainerCentreA = new Container("#bg-container", "centre", "cell", 0.5)
	const cellContainerLeftB = new Container("#bg-container", "left", "cell", 1)
	const cellContainerRightB = new Container("#bg-container", "right", "cell", 1)
	const cellContainerCenterB = new Container("#bg-container", "centre", "cell", 1)

	const alphaContainer = new AlphaContainer()

	// This should go into the AlphaContainer class 
	Array.from({length: 10}).forEach( () => {
		const cell = new Cell(app, textures)

		cell.x = randomInt(0,width)
		cell.y = randomInt(0,height)

		alphaContainer.addChild(cell)
	})

	const alphaFilter = new PIXI.filters.AlphaFilter(0.2)
	
	alphaContainer.filterArea = new PIXI.Rectangle(0, 0, width, height)
	alphaContainer.filters = [alphaFilter]

	
	app.stage.addChild(	alphaContainer,
						cellContainerLeftA,
						cellContainerRightA,
						cellContainerCentreA,
						cellContainerLeftB,
						cellContainerRightB,
						cellContainerCenterB )

	app.stage.children.filter( elem => elem.name !== "alpha").forEach( container => {
		Array.from({length: 4}).forEach( () => {
			const virus = new Virus(app, textures)
			container.addChild(virus)
		})

		container.addChild( new Cell(app, textures) )
	})

	ticker.add((deltaTime) => {
		alpha += 0.05
		alpha >= 1 ?
			ticker.stop()
			: app.stage.alpha = alpha
	});

	ticker.start();

	// Just a temporary measure
	updateCanvas(app, 0.8)
}

export default onAssetsLoaded


