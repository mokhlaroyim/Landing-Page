let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

var getClassLeft = document.getElementById("links-left");
var getClassRight = document.getElementById("links-right");
var getAnchor1 = getClassLeft.getElementsByTagName('a');
var getAnchor2 = getClassRight.getElementsByTagName('a');

function myFunction(x) {

  if(x.classList.toggle("change")){
    getClassLeft.style.display = 'contents';
    getClassRight.style.display = 'contents';
    for(let i=0; i<getAnchor1.length; i++){
      getAnchor1[i].style.display = 'block';
      getAnchor2[i].style.display = 'block';
    }
  } 
  else{
    getClassLeft.style.display = 'none';
    getClassRight.style.display = 'none';
  }   
}