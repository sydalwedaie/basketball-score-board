let counterHomeEl = document.getElementById('counter-home')
let counterGuestEl = document.getElementById('counter-guest')

let countHome = 0
let countGuest = 0

function inc(team, number) {
    if (team === 'home') {
        countHome += number
        counterHomeEl.textContent = countHome
    } else if (team === 'guest') {
        countGuest += number
        counterGuestEl.textContent = countGuest
    }
}

function newGame() {
    countHome = 0
    countGuest = 0
    counterHomeEl.textContent = 0
    counterGuestEl.textContent = 0
}