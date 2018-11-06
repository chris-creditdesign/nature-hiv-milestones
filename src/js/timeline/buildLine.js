/* eslint-disable no-mixed-spaces-and-tabs */

function buildLine() {
	this.axisContainer
	  .append('line')
		.attr('x1', this.milestoneXPositon)
		.attr('y1', this.timeScale(Math.min(...this.data.map(d => d.start))))
		.attr('x2', this.milestoneXPositon)
		.attr('y2', this.timeScale(Math.max(...this.data.map(d => d.start))))

	return this
}

export default { buildLine }
