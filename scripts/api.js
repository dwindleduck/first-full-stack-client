export const indexRuns = () => {
    return fetch("http://localhost:8000/runs")
}

export const createRun = (data) => {
    return fetch(`http://localhost:8000/runs`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showRun = (id) => {
    return fetch(`http://localhost:8000/runs/${id}`)
}

export const updateRun = (data, id) => {
    return fetch(`http://localhost:8000/runs/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

}

export const deleteRun = (id) => {
    return fetch(`http://localhost:8000/runs/${id}`, {
        method: 'DELETE'
    })
}