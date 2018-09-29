const init = function() {

	this.buildSvg()
		.buildMidpoint()
		.buildPaths()

	return this
}

export default { init }