// Defining all the required variables from the DOM.
const dropzone = document.getElementById("dropzone");
const inputImage = document.getElementById("input-image");
const imageView = document.getElementById("image-view");

// Adding change event listener to the input image section.
inputImage.addEventListener("change", uploadImage);

// Defining upload Image function:
function uploadImage(){

    // Converting input image object into the url link
    let imagelink = URL.createObjectURL(inputImage.files[0]);

    // Display input image in image view area
    imageView.style.backgroundImage = `url(${imagelink})`;

    // Removing all the text over the image and border
    imageView.textContent = "";
    imageView.style.border = 0;
}

// Preventing default event in the dropzone when the image is drag over it.
dropzone.addEventListener("dragover", function(e){
    e.preventDefault();
})

// Transferring the droped image into the input section and calling upload image function.
dropzone.addEventListener("drop", function(e){
    e.preventDefault();
    inputImage.files = e.dataTransfer.files;
    uploadImage();
})