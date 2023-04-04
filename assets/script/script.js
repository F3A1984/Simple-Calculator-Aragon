function convertM() {
  // Get input value
  var inches = parseFloat(document.getElementById("inches").value);
  
  // Convert inches to millimeters, centimeters, and meters
  var millimeters = inches * 25.4;
  var centimeters = inches * 2.54;
  var meters = inches * 0.0254;
  
  // Update the output fields
  document.getElementById("millimeters").value = millimeters.toFixed(2);
  document.getElementById("centimeters").value = centimeters.toFixed(2);
  document.getElementById("meters").value = meters.toFixed(2);
}
function convertG() {
  // Get input value
  var grams = parseFloat(document.getElementById("grams").value);
  
  // Convert inches to millimeters, centimeters, and meters
  var milligrams = grams * 1000;
  var kilograms = grams * 0.001;
  
  
  // Update the output fields
  document.getElementById("milligrams").value = milligrams.toFixed(2);
  document.getElementById("kilograms").value = kilograms.toFixed(2);
}
  