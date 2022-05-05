const API = 'https://api.nasa.gov/planetary/apod?api_key=s2ElE2Pwht59b3Z3VTGtAJw0NUiOoHhqLhWciJr1'

fetch(API)
  .then(response => response.ok ? response.json() : Promise.reject(response))
  .then(json => {
    console.log(json)
    const $card = document.getElementById('box-card')
    $card.innerHTML = `
                            <img src="${json.url}" alt="${json.hdurl}">
                            <h3>${json.title}</h3>
                            <p>${json.explanation}</p>
                        `
  })
  .catch(error => console.log(error))