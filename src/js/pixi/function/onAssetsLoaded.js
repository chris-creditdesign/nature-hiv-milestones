/* eslint-disable no-param-reassign */

import * as PIXI from 'pixi.js'
import Container from '../class/Container'
import AlphaContainer from '../class/AlphaContainer'
import VirusContainer from '../class/VirusContainer'
import updateCanvas from './updateCanvas'

function onAssetsLoaded(app, resources, jsonURl) {
	const ticker = new PIXI.ticker.Ticker()
	let alpha = 0
	const { width, height } = app.renderer

	const { textures } = resources[jsonURl]

	const alphaContainerA = new AlphaContainer(width, height, textures, 5, 'cell-complete-alpha-2.png')
	const alphaContainerB = new AlphaContainer(width, height, textures, 10, 'cell-complete-alpha-1.png')

	const virusContainerA = new VirusContainer(width, height, textures, 30, 'virus-complete-alpha-2.png')
	const virusContainerB = new VirusContainer(width, height, textures, 15, 'virus-complete-alpha-1.png')

	const cellContainerA = new Container('#js-bg-container', 'left', 'cellContainerA', textures)
	const cellContainerB = new Container('#js-bg-container', 'right', 'cellContainerB', textures, true)

	app.stage.addChild(alphaContainerA,
		alphaContainerB,
		virusContainerA,
		virusContainerB,
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
