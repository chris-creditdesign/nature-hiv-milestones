const makePathString = (start, controlA, controlB, end) => `
			M ${start.x} ${start.y}
			C ${controlA.x} ${controlA.y}
				${controlB.x} ${controlB.y}
				${end.x} ${end.y}
			`

export default makePathString
