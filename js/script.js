const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");
const getImage = async function(){
	const res = await fetch("https://picsum.photos/v2/list?limit=100.");
	const images = await res.json();
	//console.log(images);
	selectRandomImage(images);
}



//Select the Index of an Image

const selectRandomImage = function(imagePass){
	const randomIndex = Math.floor(Math.random() * imagePass.length);
	//console.log(randomIndex)
	const randomImage = imagePass[randomIndex]; //dont know whats happening here
	//console.log(randomImage);
	displayImage(randomImage);
}

//Display the image

const displayImage = function(randomImag){
	const author = randomImag.author; 
	const imageAddress = randomImag.download_url;
	authorSpan.innerText = author;
	img.src = imageAddress;
	imgDiv.classList.remove("hide");
}

button.addEventListener("click", function(){
	getImage();				
						});