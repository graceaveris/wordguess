
//choices for the game
const choices = ['mexico', 'italy', 'malaysia', 'korea', 'fiji'];
//query form
const form = document.getElementById("query-form");
// test input field
const query = document.getElementById("query");
const list = document.getElementById("list-data");
const button = document.getElementById("button-list");
// declaring the country variable for use in 
let country;

// this function takes a tag name and returns images based on it
function getTaggedPhotos(tagName) {

 fetch("https://api.tumblr.com/v2/tagged?tag=" + tagName + "&api_key=Q18H9I0fuqNF1J86vkDWUZuGgFl5OJ2CsN2nJO6UWQqA1mhJES")
   .then(function(response){
   return response.json(); //this gets the json object from within the original json file
   })

   .then(function(result) {


  	// will clear image list before loading the next one
    list.innerHTML = " ";

	const items = result.response;

	for (let i = 0; i < items.length; i++){
		const item = items[i];
    
        if(item.photos != undefined) {
            const altSizes = item.photos[0].alt_sizes;
            const imgSrc = altSizes[altSizes.length - 2].url;

		    const img = document.createElement("img");
		    img.src = imgSrc;

		    const li = document.createElement("li");
		    li.appendChild(img);
		    // li.innerHTML = imgSrc;
            list.appendChild(li);
	 }
   }

  })
}


//this function calls the get  TaggedPhotos function with the users input
form.onsubmit = function(event){
  event.preventDefault();
  const queryTerm = query.value;
  console.log(queryTerm);
  //call function with query parameter
  getTaggedPhotos(queryTerm);
}


// create a function that onclick matches the quertyTerm
function matchChoice(event) {
  event.preventDefault();
  console.log("hello");
  if (event.target.innerHTML = "Malaysia");
  console.log("match"); // this is working!
}


// this function randomly selects an item from choices
function randomCountry() {
	i = Math.floor(Math.random() * 5);
	country = choices[i];
	console.log(country);	
} 


// UNUSED CODE
// // write a loop that gets the innerhtml of my array
// function assignButtons(choices) {
// 	for(let i=0; i < choices.length; i++) {
// 		document.getElementBy
// 	}
// }
