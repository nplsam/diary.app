// function createEntryElement (data) {
//     const entry = document.createElement('div')
//     entry.className = "entryDetails"

//     const title = document.createElement('')
// }


document.getElementById("entryForm").addEventListener("submitBtn", async (e) => {
    e.preventDefault()

    const form = new FormData(e.target)

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: form.get("entryTitle"),
            date_post: form.get("entryDate"),
            time_post: form.get("entryTime"),
            category: form.get("entryCategory"),
            content: form.get("entryContent")
        })
    }

    const result = await fetch("http://localhost:5432/posts", options)

    if (result.status == 201) {
        window.location.reload()
    }
})