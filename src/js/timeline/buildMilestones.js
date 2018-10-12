function addMilestones(selection, timeline) {
	selection
		.exit().remove()

	selection
		.enter()
	  .append("circle")
		.attr("cx", timeline.width * 0.75)
		.attr("cy", d => timeline.timeScale(d.start))
		.attr("r", timeline.width / 10)
		.on("click", (d) => {
			document.getElementById(d.id)
				.scrollIntoView({ block: 'start',  behavior: 'smooth' })
		})
		.on("mouseenter", (d) => {
			
			document.getElementById("tooltip-title")
				.innerText = d.title
			document.getElementById("tooltip-tag")
				.innerText = `${d.name} (${d.start}${d.end ? `-${d.end}`: ""})`

			timeline.tooltip.style.top = timeline.timeScale(d.start) + timeline.margins.top - (timeline.tooltip.offsetHeight / 2) + "px"

			document.getElementById("tooltip").classList.remove("hidden")
		})
		.on("mouseleave", () => {
			document.getElementById("tooltip").classList.add("hidden")
		})
}

const buildMilestones = function(index) {

	this.milestoneContainer.selectAll("circle")
		.data(this.data.filter((d,i) => i !== index), d => d.start)
		.call(addMilestones, this)

	this.activeMilestoneContainer.selectAll("circle")
		.data(this.data.filter((d,i) => i === index), d => d.start)
		.call(addMilestones, this)

	return this
}

export default { buildMilestones }