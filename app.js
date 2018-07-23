'use strict';

var imgs = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var totalClicks = 0;

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

////////////////VAR & CONSTRUCTOR TO TRACK COUNT OF CLICKS/////////////////////


var imgObjs = []; //this is the images that have been shown on the webpage
var allImageObject = []; //this is the images that have been clicked

function ImageTracker(allImages) {
  this.name1 = allImages.split('.')[0];
  this.name2 = this.name1.split('/')[1];
  this.path = allImages;
  this.clicksPerImage=0;
  this.displayCount=0;
  allImageObject.push(this);
}
console.log('Total Clicks: ', totalClicks);

for( var i=0; i < imgs.length; i++) {
  imgObjs.push(new ImageTracker(imgs[i]));
}
console.log('allImageObject: ', allImageObject);

/////////TO CREATE THREE RANDOM IMAGES UPON PAGE REFRESH////////////////////

function random (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() *(max - min +1)) + min;
}
random(1,20);


function createImg() {
  img1.src = allImageObject[random(1,20)-1].path;
  img2.src = allImageObject[random(1,20)-1].path;
  img3.src = allImageObject[random(1,20)-1].path;
//   //   img1.src = imgs [random(1,20)-1];
//   img2.src = imgs [random(1,20)-1];
//   img3.src = imgs [random(1,20)-1];
}
createImg();


//////////////// TO TRACK CLICK COUNTS/////////////////////

function eachClick (event) {
  totalClicks++;
  console.log('totalClicks: ', totalClicks);

  var nameClicked = event.target.src; //error: src undefined
  console.log('nameClicked: ', nameClicked);


}






img1.addEventListener('click', eachClick);
img2.addEventListener('click', eachClick);
img3.addEventListener('click', eachClick);














