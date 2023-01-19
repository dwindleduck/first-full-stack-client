import {
    indexRuns,
    createRun,
    showRun,
	updateRun,
	deleteRun
} from "./api.js"
import {
    onIndexRunSuccess,
    onFailure,
    onCreateRunSuccess,
    onShowRunSuccess,
	onUpdateRunSuccess,
	onDeleteRunSuccess
} from "./ui.js"

const createRunForm = document.querySelector("#create-run-form")
const indexRunsContainer = document.querySelector("#index-run-container")
const showRunContainer = document.querySelector('#show-run-container')



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


showRunContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const id = event.target.getAttribute('data-id')
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
	updateRun(runData, id)
		.then(onUpdateRunSuccess)
		.catch(onFailure)
})

showRunContainer.addEventListener("click", (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteRun(id)
		.then(onDeleteRunSuccess)
		.catch(onFailure)	
})