if (navigator.userAgent.match(/AppleWebKit/) && ! navigator.userAgent.match(/Chrome/)) {  
  document.documentElement.className += " safari";
}

const elems = document.getElementsByClassName("insert");

const images = ['img/config.png','img/onpic.png','img/plantplastic.png','img/prepillowcreature.png'];

for (var c in images) {
  for (var i = 0; i < elems.length; i++) {
    elems[i].src = images[c];
 }
}

/* <div class="img"><div class="img__content"><img class="insert" src=""></div></div> */

// elem.setAttribute("src", "images/hydrangeas.jpg");
// elem.setAttribute("height", "768");
// elem.setAttribute("width", "1024");
// elem.setAttribute("alt", "Flower");
// document.getElementById("placehere").appendChild("elem")


// var array1 = ['img/config.png','img/onpic.png','img/plantplastic.png','img/prepillowcreature.png'];

// array1.forEach(function(element) {
//   var div2 = document.createElement("div");
//   var elem = document.createElement("img");
//   elem.setAttribute("src", element)
//   //console.log(element);
// });