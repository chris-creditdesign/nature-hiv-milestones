import * as PIXI from 'pixi.js'
import Container from '../class/Container'
import AlphaContainer from '../class/AlphaContainer'
// import Virus from '../class/Virus'
// import Cell from '../class/Cell'
import updateCanvas from './updateCanvas'

import randomInt from '../../helpers/randomInt.js'

const onAssetsLoaded = function(app, resources, jsonURl) {
	
	const ticker = new PIXI.ticker.Ticker()
	let alpha = 0
	const {width, height} = app.renderer

	const textures = resources[jsonURl].textures

	const alphaContainerB = new AlphaContainer(width, height, textures, 10, 4, 0.6)
	const alphaContainerC = new AlphaContainer(width, height, textures, 5, 1, 0.8)

	const cellContainerA = new Container("#bg-container", "left", "cellContainerA", textures)
	const cellContainerB = new Container("#bg-container", "right", "cellContainerB", textures)

	// This should go into the AlphaContainer class 
	// Array.from({length: 10}).forEach( () => {
	// 	const cell = new Cell(app, textures)

	// 	cell.x = randomInt(0,width)
	// 	cell.y = randomInt(0,height)

	// 	alphaContainer.addChild(cell)
	// })

	// const alphaFilter = new PIXI.filters.AlphaFilter(0.4)
	
	// alphaContainer.filterArea = new PIXI.Rectangle(0, 0, width, height)
	// alphaContainer.filters = [alphaFilter]

	app.stage.addChild( alphaContainerB,
						alphaContainerC, 
						cellContainerA,
						cellContainerB
						)
	
	// app.stage.addChild(	alphaContainer,
	// 					cellContainerLeftA,
	// 					cellContainerRightA,
	// 					cellContainerCentreA,
	// 					cellContainerLeftB,
	// 					cellContainerRightB,
	// 					cellContainerCenterB )

	// app.stage.children.filter( elem => elem.name !== "alpha").forEach( container => {
	// 	Array.from({length: 4}).forEach( () => {
	// 		const virus = new Virus(app, textures)
	// 		container.addChild(virus)
	// 	})

	// 	container.addChild( new Cell(app, textures) )
	// })

	ticker.add((deltaTime) => {
		alpha += 0.05

		app.stage.alpha = alpha
		
		if (alpha >= 1) {
			ticker.stop()
		}
 
		// alpha > 1 ?
		// 	ticker.stop()
		// 	: app.stage.alpha = alpha
	});

	ticker.start();

	// Just a temporary measure
	updateCanvas(app, 0.8)
}

export default onAssetsLoaded


