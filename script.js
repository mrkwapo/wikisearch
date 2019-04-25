/* global fetch */

const response = ["apple", "banana", "orange"];



// Click handler
function handleClick(){
  console.log("Button is clicked");
  
  makeAPIcall();
}

function makeAPIcall(){

  const input = document.getElementById("input").value;
  console.log(input);
  const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search="+ input +"&limit=10&namespace=0&format=json";
  
  fetch(url)
  .then(function(response){
    return response.json();
  }).then(function(response){
    console.log(response);
    displayResults(response[1], response[2], response[3]);
  });
}

// This function displays results(a array) on the page as a list
function displayResults(titles, description, links){
  console.log(links);
  console.log(description)
  const newResponse = titles.map(function(item, index){
    console.log(item);
    
    return "<li>" + "<a href="+ links[index] +">"+ item + "</a>" + "</li>" + description;
  });
  const joinedResponse = newResponse.join("\n");
  console.log(joinedResponse);
  
  document.getElementById("results").innerHTML = joinedResponse;
}