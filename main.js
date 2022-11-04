import { matches } from "./db.js"

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

document.querySelector("#cards").innerHTML =
  // 21/11
  createCard(
    matches[0].date,
    matches[0].day,
    createGame(matches[0].player1, matches[0].time, matches[0].player2) +
      createGame(matches[1].player1, matches[1].time, matches[1].player2)
  ) +
  // 22/11
  createCard(
    matches[2].date,
    matches[2].day,
    createGame(matches[2].player1, matches[2].time, matches[2].player2) +
      createGame(matches[3].player1, matches[3].time, matches[3].player2)
  ) +
  // 23/11
  createCard(
    matches[4].date,
    matches[4].day,
    createGame(matches[4].player1, matches[4].time, matches[4].player2)
  ) +
  // 24/11
  createCard(
    matches[5].date,
    matches[5].day,
    createGame(matches[5].player1, matches[5].time, matches[5].player2)
  ) +
  // 25/11
  createCard(
    matches[6].date,
    matches[6].day,
    createGame(matches[6].player1, matches[6].time, matches[6].player2) +
      createGame(matches[7].player1, matches[7].time, matches[7].player2)
  ) +
  // 26/11
  createCard(
    matches[8].date,
    matches[8].day,
    createGame(matches[8].player1, matches[8].time, matches[8].player2)
  ) +
  // 27/11
  createCard(
    matches[9].date,
    matches[9].day,
    createGame(matches[9].player1, matches[9].time, matches[9].player2)
  ) +
  // 28/11
  createCard(
    matches[10].date,
    matches[10].day,
    createGame(matches[10].player1, matches[10].time, matches[10].player2) +
      createGame(matches[11].player1, matches[11].time, matches[11].player2)
  ) +
  // 29/11
  createCard(
    matches[12].date,
    matches[12].day,
    createGame(matches[12].player1, matches[12].time, matches[12].player2) +
      createGame(matches[13].player1, matches[13].time, matches[13].player2)
  ) +
  // 30/11
  createCard(
    matches[14].date,
    matches[14].day,
    createGame(matches[14].player1, matches[14].time, matches[14].player2)
  ) +
  // 01/12
  createCard(
    matches[15].date,
    matches[15].day,
    createGame(matches[15].player1, matches[15].time, matches[15].player2)
  ) +
  // 02/12
  createCard(
    matches[16].date,
    matches[16].day,
    createGame(matches[16].player1, matches[16].time, matches[16].player2) +
      createGame(matches[17].player1, matches[17].time, matches[17].player2)
  )
