'use strict';


var imgs = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var totalClicks = 0;

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

var showVotes = document.getElementById('votes');

var ran1, ran2, ran3;

//+++++++++++++++++++++++++CONSTRUCTOR & OTHER FUNCTIONS+++++++++++++++++++++++

var imgObjs = []; //this is the images that have been shown on the webpage; duplicated list?
var allImageObject = []; //this is all the images that we have and all their info from the constructor


function ImageTracker(allImages) {
  this.name1 = allImages.split('.')[0];
  this.name2 = this.name1.split('/')[1];
  this.path = allImages;
  this.clicksPerImage=0;
  this.displayCount=0;
  allImageObject.push(this);
  // nukeresultVotes();
}

for( var i=0; i < imgs.length; i++) {
  imgObjs.push(new ImageTracker(imgs[i]));
}

/////////TO CREATE THREE RANDOM IMAGES UPON PAGE REFRESH////////////////////

function random (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() *(max - min +1)) + min;
}
random(1,20);


function resultVotes() {
  for (var j = 0; j < allImageObject.length; j++) {
    var ulEl = document.createElement('ul');
    ulEl.textContent = 'Image ' + allImageObject[j].name2 + ': ' + allImageObject[j].clicksPerImage + ' votes';
    showVotes.appendChild(ulEl);
  }
}

function createImg() {
  ran1 = random(1,20)-1;
  



  ran2 = random(1,20)-1;
  ran3 = random(1,20)-1;
  img1.src = imgs[ran1];
  img2.src = imgs[ran2];
  img3.src = imgs[ran3];
  allImageObject[ran1].displayCount ++;
  allImageObject[ran2].displayCount ++;
  allImageObject[ran3].displayCount ++;
}
createImg();

//////////////// BELOW ARE EVENT HANDLERS /////////////////////


function eachClick1 (event) {
  totalClicks++;
  var nameClicked = event.target.src;
  console.log('nameClicked: ', nameClicked);
  allImageObject[ran1].clicksPerImage++;
  console.log('allImageObject[ran1].name2: ', allImageObject[ran1].name2);
  console.log('allImageObject[ran1].clicksPerImage: ', allImageObject[ran1].clicksPerImage);
  if (totalClicks < 25) {
    createImg();
  } else {
    alert('You have reached 25 clicks. Thank you for your participation.');
    resultVotes();
  }
}

function eachClick2 (event) {
  totalClicks++;
  var nameClicked = event.target.src;
  console.log('nameClicked: ', nameClicked);
  allImageObject[ran2].clicksPerImage++;
  console.log('allImageObject[ran2].name2: ', allImageObject[ran2].name2);
  console.log('allImageObject[ran2].clicksPerImage: ', allImageObject[ran2].clicksPerImage);
  if (totalClicks < 25) {

    createImg();
  } else {
    resultVotes();
    alert('You have reached 25 clicks. Thank you for your participation.');
  }
}

function eachClick3 (event) {

  totalClicks++;

  var nameClicked = event.target.src;
  console.log('nameClicked: ', nameClicked);
  allImageObject[ran3].clicksPerImage++;
  console.log('allImageObject[ran3].name2: ', allImageObject[ran3].name2);
  console.log('allImageObject[ran3].clicksPerImage: ', allImageObject[ran3].clicksPerImage);
  if (totalClicks < 5) {
    createImg();
  } else {
    alert('You have reached 25 clicks. Thank you for your participation.');
    resultVotes();
  }
}



img1.addEventListener('click', eachClick1);
img2.addEventListener('click', eachClick2);
img3.addEventListener('click', eachClick3);







