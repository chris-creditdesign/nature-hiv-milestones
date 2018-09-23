import buildSvg from './buildSvg'
import buildPaths from './buildPaths'
import buildCells from './buildCells'
import updateCells from './updateCells'

const Background = options => {
	return Object.assign(
			{},
			buildSvg,
			buildPaths,
			buildCells,
			updateCells,
			options
		)
	}

export default Background