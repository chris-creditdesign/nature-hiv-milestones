import buildSvg from './buildSvg'
import buildScales from './buildScales'
import buildAxis from './buildAxis'
import buildLine from './buildLine'
import buildMilestones from './buildMilestones'
import updateSvg from './updateSvg'

function Timeline(options) {
	return Object.assign(
		{},
		buildSvg,
		buildScales,
		buildAxis,
		buildLine,
		buildMilestones,
		updateSvg,
		options
	)
}

export default Timeline
