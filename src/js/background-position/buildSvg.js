import { select } from 'd3-selection'

const buildSvg = function() {

		this.svg = select(this.target)
					.append("svg")
					.attr("width", this.width)
					.attr("height", this.height)

		this.pathGroup = this.svg.append("g")
			.attr("class", "pathGroup")

		return this

	}

export default { buildSvg }