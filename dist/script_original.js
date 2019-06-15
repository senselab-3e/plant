if (navigator.userAgent.match(/AppleWebKit/) && ! navigator.userAgent.match(/Chrome/)) {  
  document.documentElement.className += " safari";
}


var array1 = ['img/config.png','img/onpic.png','img/plantplastic.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/prepillowcreature.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png','img/onpic.png'];


function createthingy(array){
  var div
  var div2
  var myImage
  main = document.createElement('div');
  main.className = "main";
  containerdiv = document.createElement('div');
  containerdiv.className = "scene";
  plant = document.createElement('div');
  plant.className = "plant";
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
    plant.appendChild(div);
    containerdiv.appendChild(plant);
    main.appendChild(containerdiv)
    document.body.appendChild(main)
  }
}
// tried to see if i could re-assign the first div classname, but no.... 

createthingy(array1)
