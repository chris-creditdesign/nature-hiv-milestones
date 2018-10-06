import * as PIXI from 'pixi.js'
import onAssetsLoaded from './onAssetsLoaded'
// import Cell from '../class/Cell'
// import Container from '../class/Container'
// import FastContainer from '../class/FastContainer'

const loadCanvas = function(jsonURL) {
	
	const ticker = new PIXI.ticker.Ticker()
	let alpha = 0

	// Checking the height of the pixi-container accounts for the address and tab bar
	// on ios which affects the screen height
	const height = document.getElementById("pixi-container").offsetHeight === window.innerHeight ?
		window.innerHeight
		: document.getElementById("pixi-container").offsetHeight

	const app = new PIXI.Application(
			window.innerWidth,
			height,
			{transparent: true, antialias: true}
		)

	app.stage.alpha = 0

	PIXI.loader
		.add(jsonURL)
		.load((loader, resources) => {
			onAssetsLoaded(app, resources, jsonURL)
		})

	ticker.add((deltaTime) => {
		alpha += 0.05
		alpha >= 1 ?
			ticker.stop()
			: app.stage.alpha = alpha
	});

	ticker.start()

	return app
}

export default loadCanvas
