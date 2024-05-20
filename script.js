let uploadImage = document.getElementById("input");
let imageContainer = document.getElementById("image-container");
let galleryContainer = document.getElementById("gallery-container");
let columnContainer = document.getElementById("column-container");
let oddColumn = document.getElementById("odd-column");
let evenColumn = document.getElementById("even-column");
let thirdColumn = document.getElementById("third-column");
const addedImages = [];	

//Adding an image to the gallery
input.onchange = () => {
	let imageDiv = document.createElement("div");
	let newImage = document.createElement("img");
	imageDiv.classList.add("column-div");
	imageDiv.appendChild(newImage);
	newImage.src = URL.createObjectURL(uploadImage.files[0]);

	if (getComputedStyle(thirdColumn)["display"] == "block") {
		if (addedImages.length % 3 === 0) {
			evenColumn.appendChild(imageDiv);
			addedImages[addedImages.length] = addedImages.length;
		}else if (addedImages.length % 2 === 0) {
			thirdColumn.appendChild(imageDiv);
			addedImages[addedImages.length] = addedImages.length;
		}else {
			oddColumn.appendChild(imageDiv);
			addedImages[addedImages.length] = addedImages.length;
		}
	}else if (addedImages.length % 2 === 0) {
		evenColumn.appendChild(imageDiv);
		addedImages[addedImages.length] = addedImages.length;
	}else if (addedImages.length % 2 !== 0) {
		oddColumn.appendChild(imageDiv);
		addedImages[addedImages.length] = addedImages.length;
	}  
};

