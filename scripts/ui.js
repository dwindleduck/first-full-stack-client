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
    messageContainer.innerText = 'You have logged a run'
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

        <form data-id="${run._id}">
            <input type="text" name="discription" value="${run.discription}" />
            <input type="number" name="distance" value="${run.distance}" />
            <input type="text" name="surface" value="${run.surface}" />
            <input type="number" name="difficulty" value="${run.difficulty}" />
            <input type="number" name="duration" value="${run.duration}" />
            <input type="number" name="averageSpeed" value="${run.averageSpeed}" />
            <input type="submit" value="Update Run" />
        </form>

        <button data-id="${run._id}">Delete Run</button>

    `
	showRunContainer.appendChild(div)
}

export const onUpdateRunSuccess = () => {
    messageContainer.innerText = 'Run successfully updated'
}

export const onDeleteRunSuccess = () => {
    messageContainer.innerText = 'Run successfully deleted'
}