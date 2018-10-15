import * as PIXI from 'pixi.js'
import onAssetsLoaded from './onAssetsLoaded'

const loadCanvas = function(jsonURL) {
	
	const ticker = new PIXI.ticker.Ticker()
	// let alpha = 0

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

	// const blurFilter = new PIXI.filters.BlurFilter(5)
	// const colorMatrixFilter = new PIXI.filters.ColorMatrixFilter()
	
	// colorMatrixFilter.contrast(20, false)
	// colorMatrixFilter.hue(20, true)
	// colorMatrixFilter.alpha = 0.1

	// app.stage.filterArea = new PIXI.Rectangle(0, 0, window.innerWidth, height)
	// app.stage.filters = [blurFilter, colorMatrixFilter]

	const noise = new PIXI.filters.NoiseFilter(0.05)
	app.stage.filters = [noise]


	// ticker.add((deltaTime) => {
	// 	alpha += 0.05
	// 	alpha >= 1 ?
	// 		ticker.stop()
	// 		: app.stage.alpha = alpha
	// });

	// ticker.start()

	return app
}

export default loadCanvas
