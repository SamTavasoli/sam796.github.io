var nav = document.getElementById("nav");

var filetype = ["note", "exercise", "ta"];

var linksHtml = "<div class='container'> <div class='row'>";
for (var i = 1; i < 15; i++){
  
  linksHtml += `
  <div class="flip-card .col-6 .col-md-4 .col-sm-4">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1>Week`+ i +`</h1>
    </div>
    <div class="flip-card-back">`;

  for (var j = 0; j < filetype.length; j++){
    var label = "Week"+ i + " " + filetype[j];
    var url = "week" + i + "/" + filetype[j] + ".html";

    linksHtml += '<a href="'+ url +'">'+ label +'</a><br>';
  }
  linksHtml += "</div></div></div>"
}
linksHtml += "</div></div>"
 
  nav.innerHTML = linksHtml;