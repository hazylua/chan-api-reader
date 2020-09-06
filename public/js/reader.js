window.addEventListener('DOMContentLoaded', getThreads('x'))


async function getThreads(boardName) {
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://a.4cdn.org/${boardName}/threads.json`)
    let json = await response.json()
    const html = json.map(object => {
        return `
        <p>Page ${object.page}</p>
        <div class="info">Threads:
        ${object.threads.map(thread => { return `<p>Number: ${thread.no}</p><p>Replies: ${thread.replies}</p><p>///</p>` })}
        </div>
        `
    }).join("")
    document.querySelector("#main_content").insertAdjacentHTML("afterbegin", html)
}