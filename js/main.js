var nav = document.getElementById("nav");
const links = [
    {
      label: "Week1 notes",
      url: "week1/note.html"
    }, 
    {
        label: "Week1 exercise",
        url: "week1/exercise.html"
      },
      {
        label: "Week2 notes",
        url: "week2/note.html"
      },
      {
        label: "Week2 exercise",
        url: "week2/exercise.html"
      }
  ]
  var linksHtml = "";
  for (link of links) {
   linksHtml += "<li><a href='"+ link["url"] + "'>" + link["label"] + "</a></li>";
  }
  nav.innerHTML = linksHtml;