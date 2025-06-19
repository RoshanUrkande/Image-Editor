// Reset all the slider values to there default values
function resetImage() {
  brightnessSlider.value = 100;
  contrastSlider.value = 100;
  grayscaleSlider.value = 0;
  hueRotateSlider.value = 0;
  saturateSlider.value = 100;
  sepiaSlider.value = 0;
  applyFilter();
}

function saveImage() {
  // Select the temporary element we have created for
  // helping to save the image
  let linkElement = document.getElementById("link");
  linkElement.setAttribute("download", "edited_image.png");

  // Convert the canvas data to a image data URL
  let canvasData = canvas.toDataURL("image/png");

  // Replace it with a stream so that
  // it starts downloading
  canvasData.replace("image/png", "image/octet-stream");

  // Set the location href to the canvas data
  linkElement.setAttribute("href", canvasData);

  // Click on the link to start the download
  linkElement.click();
}
