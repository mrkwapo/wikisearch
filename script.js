/* global fetch */

// Click handler
function handleClick() {
    makeAPIcall();
}

function makeAPIcall() {
    const input = document.getElementById("input").value;
    const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&limit=10&namespace=0&format=json";

    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (response) {
        displayResults(response[1], response[2], response[3]);
    });
}

// This function displays results(a array) on the page as a list
function displayResults(titles, description, links) {
    document.getElementById("results").innerHTML = titles.map(function (item, index) {
        return `
          <li>
            <a href="${ links[index] }"><h4>${ item }</h4></a>
            <p>${ description[index] }</p>
          </li>
        `;
    });
}