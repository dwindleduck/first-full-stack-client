const indexRunsContainer = document.querySelector("#index-run-container")
const messageContainer = document.querySelector("#message-container")
const showRunContainer = document.querySelector("#show-run-container")

export const onIndexRunSuccess = (runs) => {
    runs.forEach((run)=> {
        const div = document.createElement("div")
        div.innerHTML = `
            <h3>${run.discription}</h3>
            <button data-id="${run._id}">Show Run</button>
        `
        indexRunsContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>Oh no, an error!</h3>
        <p>${error}</p>
    `
}

export const onCreateRunSuccess = () => {
    messageContainer.innerText = 'You have created a character'
}

export const onShowRunSuccess = (run) => {
	const div = document.createElement('div')
	div.innerHTML = `
        <h3>${run.discription}</h3>
        <p>Distance: ${run.distance}</p>
        <p>Surface: ${run.surface}</p>
        <p>Difficulty: ${run.difficulty}</p>
        <p>Duration: ${run.duration}</p>
        <p>Average Speed: ${run.averageSpeed}</p>
        <p>ID: ${run._id}</p>
    `
	showRunContainer.appendChild(div)
}
