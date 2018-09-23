const randomRange = section => {
	return Math.floor(Math.random() * (section.max - section.min + 1)) + section.min
}

const makeCoord = (x, y) => {
	return { 
				x: randomRange(x),
				y: randomRange(y)
			}
}

export default makeCoord