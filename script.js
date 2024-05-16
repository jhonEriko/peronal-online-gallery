let uploadImage = document.getElementById("input");
let imageContainer = document.getElementById("image-container");
let oddColumn = document.getElementById("odd-column");
let evenColumn = document.getElementById("even-column");
const addedImages = [];	




/*input.onchange = () => {
	//uploadedImage.src = URL.createObjectURL(uploadImage.files[0]);
	let newImage = document.createElement("img");
	newImage.src = URL.createObjectURL(uploadImage.files[0]);
	imageContainer.appendChild(newImage);
}*/

/*input.onchange = () => {
	let newImage = document.createElement("img");
	newImage.src = URL.createObjectURL(uploadImage.files[0]);
	if (addedImages.length % 2 === 0) {
		evenColumn.appendChild(newImage);
		addedImages[addedImages.length] = addedImages.length;
	} else if (addedImages.length % 2 !== 0) {
		oddColumn.appendChild(newImage);
		addedImages[addedImages.length] = addedImages.length;
	};
}*/

input.onchange = () => {
	let imageDiv = document.createElement("div");
	let newImage = document.createElement("img");
	let deleteImage = document.createElement("div")
	imageDiv.classList.add("column-div");
	imageDiv.appendChild(newImage);
	newImage.src = URL.createObjectURL(uploadImage.files[0]);
	deleteImage.classList.add("delete-image");
	imageDiv.appendChild(deleteImage);

	if (addedImages.length % 2 === 0) {
		evenColumn.appendChild(imageDiv);
		addedImages[addedImages.length] = addedImages.length;
	} else if (addedImages.length % 2 !== 0) {
		oddColumn.appendChild(imageDiv);
		addedImages[addedImages.length] = addedImages.length;
	};

	deleteImage.addEventListener("click", (e) => {
		if (confirm("Delete photo?") == true) {
			e.target.parentElement.remove();
			addedImages.pop();
			uploadImage.value = "";
		}
	})

}

