import { scaleLinear } from 'd3-scale'

function buildScales() {
	this.timeScale = scaleLinear()
		.domain([this.data.startYear, this.data.endYear])
		.range([0, this.height])

	return this
}

export default { buildScales }
