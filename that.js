saveEl = document.getElementById("save-el")
countEl = document.getElementById("count-el")
let count = 0



function increment() {
    count += 1

    countEl.innerText = count
}

function save() {
    countStr = count + " - "
    saveEl.innerText += countStr
    countEl.textContent = 0

}