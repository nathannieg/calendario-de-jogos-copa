// Creates game
function createGame(player1, time, player2) {
  return `
  <li>
              <img src="./assets/img/country-flags/icon=${player1}.svg" alt="Bandeira do(a) ${player1}" />
              <strong>${time}</strong>
              <img
                src="./assets/img/country-flags/icon=${player2}.svg"
                alt="Bandeira do(a) ${player2}"
              />
            </li>
  `
}

// Animation with JS
let delay = -0.4 // makes first card have delay = 0

// Creates card
function createCard(date, day, game) {
  delay = delay + 0.4

  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${game}
          </ul>
        </div>
  `
}

// Creating the whole HTML structure via JS
document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("uruguay", "10:00", "south korea") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
