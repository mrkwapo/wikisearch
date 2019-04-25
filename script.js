/* global axios */

// Click handler
function handleClick() {
  console.log("Button is clicked");

  makeAPIcall();
}

function makeAPIcall() {

  const input = document.getElementById("input").value;
  console.log(input);
  const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&limit=10&namespace=0&format=json";

  axios.get(url).then(function(response) {
      console.log(response);
      displayResults(response.data[1], response.data[2], response.data[3]);
      console.log(response[2]);
    })
    .catch(function(error) {
      console.log(error)
    });
}

// This function displays results(a array) on the page as a list
function displayResults(titles, description, links) {
  console.log(links);
  //   console.log(description)
  const newResponse = titles.map(function(item, index) {
    console.log(item);

    return "<li>" + "<a href=" + links[index] + ">" + item + "</a>" + "</li>" + description[index];
  });
  const joinedResponse = newResponse.join("\n");
  console.log(joinedResponse);

  document.getElementById("results").innerHTML = joinedResponse;
}
