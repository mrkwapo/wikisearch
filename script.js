/* global fetch */

// Click handler
function handleClick(){
  console.log("Button is clicked");
  document.getElementById("input").value;
  displayResults(response);
}


const response = ["apple", "banana", "orange"];
console.log(input);
const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search="+ input +"&limit=10&namespace=0&format=json"





fetch(url)
  .then(function(response){
    return response.json()
  }).then(function(response){
    console.log(response);
  })



// This function displays results(a array) on the page as a list
function displayResults(response){
  
  const newResponse = response.map(function(item){
    console.log(item);
    return "<li>" + "<a href=#>"+ item + "</a>" + "</li>"
  });
  const joinedResponse = newResponse.join("\n");
  console.log(joinedResponse);
  
  document.getElementById("results").innerHTML = joinedResponse;
}