const jokes = document.querySelector("#jokes")
const btn = document.querySelector("#get-joke-btn")




const API_URL = `https://icanhazdadjoke.com/`

const getJokes = async () => {
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    const data = await response.json()

    jokes.innerText = data.joke + "😂"
}

btn.addEventListener("click", getJokes)

