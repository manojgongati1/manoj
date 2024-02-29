document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector(".gallery");

  // Loop to add images from the 'images' folder
  const numberOfImages = 50; // Assuming there are 10 images
  const imagesFolderPath = "images/"; // Relative path to the images folder

  for (let i = 1; i <= numberOfImages; i++) {
    const img = document.createElement("img");
    const imageFormats = ['jpg', 'jpeg', 'png', 'gif']; // Add other formats if needed
    let found = false;
    
    // Iterate over possible image formats
    for (const format of imageFormats) {
      const imagePath = `${imagesFolderPath}img${i}.${format}`;
      
      // Try to load the image
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', imagePath, false);
      xhr.send();
      
      // If the image exists, set the src attribute and break out of the loop
      if (xhr.status !== 404) {
        img.src = imagePath;
        img.alt = `Image ${i}`;
        gallery.appendChild(img);
        found = true;
        break;
      }
    }
    
    // If no image is found, log an error
    if (!found) {
      console.error(`Image img${i} not found in any of the supported formats.`);
    }
  }
});
