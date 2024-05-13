let uploadImage = document.getElementById("input");
let uploadedImage = document.getElementById("image");
let imageContainer = document.getElementById("image-container")

input.onchange = () => {
	//uploadedImage.src = URL.createObjectURL(uploadImage.files[0]);
	let newImage = document.createElement("img");
	newImage.src = URL.createObjectURL(uploadImage.files[0]);
	imageContainer.appendChild(newImage);
}
