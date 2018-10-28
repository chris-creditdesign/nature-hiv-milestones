/* eslint-disable no-param-reassign */

import * as PIXI from 'pixi.js'
import Container from '../class/Container'
import AlphaContainer from '../class/AlphaContainer'
import updateCanvas from './updateCanvas'

function onAssetsLoaded(app, resources, jsonURl) {
	const ticker = new PIXI.ticker.Ticker()
	let alpha = 0
	const { width, height } = app.renderer

	const { textures } = resources[jsonURl]

	const alphaContainerB = new AlphaContainer(width, height, textures, 5, 'cell-complete-alpha-2.png')
	const alphaContainerC = new AlphaContainer(width, height, textures, 10, 'cell-complete-alpha-1.png')

	const cellContainerA = new Container('#bg-container', 'left', 'cellContainerA', textures)
	const cellContainerB = new Container('#bg-container', 'right', 'cellContainerB', textures, true)

	app.stage.addChild(alphaContainerB,
		alphaContainerC,
		cellContainerA,
		cellContainerB)

	ticker.add(() => {
		alpha += 0.05

		app.stage.alpha = alpha

		if (alpha >= 1) {
			ticker.stop()
		}
	});

	ticker.start();

	// Just a temporary measure
	updateCanvas(app, 0)
}

export default onAssetsLoaded
