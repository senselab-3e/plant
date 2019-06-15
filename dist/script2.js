if (navigator.userAgent.match(/AppleWebKit/) && ! navigator.userAgent.match(/Chrome/)) {  
  document.documentElement.className += " safari";
}


//-------------- old loop 

// const elems = document.getElementsByv("insert");

// const images = ['img/config.png','img/onpic.png','img/plantplastic.png','img/prepillowcreature.png'];

// for (var c in images) {
//   for (var i = 0; i < elems.length; i++) {
//     elems[i].src = images[c];
//  }
// }

//-----------------------



var array1 = ['img/config.png','img/onpic.png','img/plantplastic.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png'];



  //var div2 = document.createElement("div");
  // for (var i = 0; i < 27; i++) {
  // document.getElementById("scene").createElement("div")[c]
  // img = document.createAttribute("src", c)
  // }

  // var elem = document.createElement("img");
  // elem.setAttribute("src", element)
  //console.log(element);
  // var targetArea = document.getElementById('nav');
  // var div = document.createElement('div');
  // var snippet = document.createTextNode('this is a new DIV');
  // div.appendChild(snippet);
  // targetArea.appendChild(div);
//}

// var targetArea = document.getElementsByClassName("scene");
// var div = document.createElement('div');
// var snippet = document.createElement('img');
// snippet.src = imagepath;
// div.appendChild(snippet);
// targetArea.appendChild(div);

// var html = '<div className="scene"></div>';

// var container = document.createElement("div");
// container.className = "scene";
  




function createthingy(array){
  var div
  var div2
  var myImage
  main = document.createElement('div');
  main.className = "main";
  containerdiv = document.createElement('div');
  containerdiv.className = "scene";
  for (var c in array) {  
    div = document.createElement('div');
    div.className = "img";
    containerdiv.appendChild(div)
    div2 = document.createElement('div');
    div2.className = "img__content";
    myImage = new Image();
    myImage.src = array[c]
    div2.appendChild(myImage)
    div.appendChild(div2)
    //targetArea.appendChild(div)
    containerdiv.appendChild(div);
    main.appendChild(containerdiv)
    document.body.appendChild(main)
  }
}
// tried to see if i could re-assign the first div classname, but no.... 

createthingy(array1)


var targetArea = document.getElementsByClassName("scene");

// function createspin(thingies){
//   div = document.createElement('div');
//   div.className = "scene";
//   thingy = new Image();
//   thingy.src = thingies[0]
//   document.getElementsByClassName('scene').innerHTML ('<div>thingy</div>')
// }

// createspin(array1)

//function createDiv(numberOfDivs) {
  //var i = 0;
  //var newElement = [];
  //var mainContainer = document.getElementByClass('scene');
  //mainContainer.appendChild(array1[0])
//   for (i; i < numberOfDivs; i++) {
//     newElement[i] = document.createElement('div');
//     //newElement[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     newElement[i].className = 'img';
//     newElement[i].src = array1[0]
//     newElement[i].id = (i + 1);
// //  newElement[i].textContent = 'this is div number: ' + (i + 1);
//     mainContainer.appendChild(newElement[i]);
//   }
//};

// createDiv(10);



// var mainContainer = document.getElementsByClassName("apples");

// mainContainer.append(array1[0])









