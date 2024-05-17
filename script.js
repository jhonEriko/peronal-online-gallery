let uploadImage = document.getElementById("input");
let imageContainer = document.getElementById("image-container");
let galleryContainer = document.getElementById("gallery-container")
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
	imageDiv.classList.add("column-div");
	imageDiv.appendChild(newImage);
	newImage.src = URL.createObjectURL(uploadImage.files[0]);

	if (addedImages.length % 2 === 0) {
		evenColumn.appendChild(imageDiv);
		addedImages[addedImages.length] = addedImages.length;
	} else if (addedImages.length % 2 !== 0) {
		oddColumn.appendChild(imageDiv);
		addedImages[addedImages.length] = addedImages.length;
	};

	/*deleteImage.addEventListener("click", (e) => {
		if (confirm("Delete photo?") == true) {
			e.target.parentElement.remove();
			addedImages.pop();
			uploadImage.value = "";
		};
	});*/

	newImage.addEventListener("click", (e) => {
		console.log(uploadImage.files[0].name);
		let viewImage = document.createElement("div");
		viewImage.classList.add("view-image");
		document.body.appendChild(viewImage);
		viewImage.style.display = "block";
		viewImage.style.position = "fixed";
		let imageHolder = document.createElement("div");
		imageHolder.classList.add("image-holder");
		viewImage.appendChild(imageHolder);
		let closeImage = document.createElement("span");
		closeImage.innerHTML = "&#10060";
		imageHolder.appendChild(closeImage);
		let deleteImage = document.createElement("span");
		deleteImage.classList.add("delete");
		deleteImage.innerHTML = "Delete";
		imageHolder.appendChild(deleteImage);
		let imageViewed = document.createElement("img");
		imageViewed.src = URL.createObjectURL(uploadImage.files[0]);
		imageHolder.appendChild(imageViewed);

		window.onclick = (e) => {
			console.log(viewImage.tagName);
			if (e.target.tagName = "DIV") {
				viewImage.style.display = "none";
			}
		}
			
	});
}

