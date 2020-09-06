async function getBoard(boardName) {
    // Fetching data from API.
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://a.4cdn.org/${boardName}/threads.json`)

    // If error say that board inputted does not exist.
    if (response.status != 200)
        document.querySelector("#main_content").innerHTML = "<p>This board does not exist</p>"
    else {
        // Parse JSON data from response.
        let json = await response.json()

        // Variables.
        let threadNum = 0
        let threadActiveNum = 0

        // Read JSON.
        json.map(object => {
            // Get number of threads on each board.
            threadNum += object.threads.length
            object.threads.map(thread => {
                // If thread was made in the last hour, it is active.
                if (Math.floor(Date.now() / 1000) - thread.last_modified <= 3600) {
                    console.log(Date.now())
                    threadActiveNum += 1
                }
            })
        })

        // Put into HTML.
        const html = `
            <h2>/${boardName}/ stats:</h2>
            <p>Number of threads: ${threadNum}</p>
            <p>Number of active threads (modified in the last hour): ${threadActiveNum}</p>
            <p>...</p>
        `
        document.querySelector("#main_content").innerHTML = html
    }
}