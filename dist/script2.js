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


function createthingy(array){
  
  main = document.createElement('div');
  main.className = "main";
  containerdiv = document.createElement('div');
  containerdiv.className = "scene";
  plant = document.createElement('div');
  plant.className = "plant";
  for (var c in array) {  
    var div = document.createElement('div');
    div.className = "img";
    containerdiv.appendChild(div)
    var div2 = document.createElement('div');
    div2.className = "img__content";
    var myImage = new Image();
    myImage.src = array[c]
    div2.appendChild(myImage)
    div.appendChild(div2)
    //targetArea.appendChild(div)
    plant.appendChild(div);
    containerdiv.appendChild(plant);
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









