//identify grid table
var table = document.getElementById('pixelCanvas')
// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
  //stop default button event action
  event.preventDefault();
  // Select size input
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  
  //remove old grid
  table.innerHTML = '';
  
  //build new grid based on user inputs
  for (h = 0; h < height; h++) {
    var row = document.createElement('tr');
    for (w = 0; w < width; w++) {
      var cell = document.createElement('td');
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

//build grid when user clicks submit button
var button = document.getElementById("submit");
button.addEventListener("click", makeGrid);

//color fields when clicked by user
table.addEventListener("click",function(event){
  var color = document.getElementById('colorPicker').value;
  event.target.style.backgroundColor = color;
});
