import {
    indexRuns,
    createRun,
    showRun
} from "./api.js"
import {
    onIndexRunSuccess,
    onFailure,
    onCreateRunSuccess,
    onShowRunSuccess
} from "./ui.js"

const createRunForm = document.querySelector("#create-run-form")
const indexRunsContainer = document.querySelector("#index-run-container")

indexRuns()
    .then((res) => res.json())
    .then((res) => onIndexRunSuccess(res.runs))
    .catch(onFailure)

createRunForm.addEventListener("submit", (event) => {
    event.preventDefault()
	const runData = {
		run: {
			discription: event.target['discription'].value,
			distance: event.target['distance'].value,
			surface: event.target['surface'].value,
			difficulty: event.target['difficulty'].value,
            duration: event.target['duration'].value,
            averageSpeed: event.target['averageSpeed'].value,
		},
	}
	createRun(runData)
		.then(onCreateRunSuccess)
		.catch(onFailure)

})

indexRunsContainer.addEventListener("click", (event) => {
    const id = event.target.getAttribute('data-id')
	showRun(id)
		.then((res) => res.json())
		.then((res) => onShowRunSuccess(res.run))
		.catch(onFailure)
})
