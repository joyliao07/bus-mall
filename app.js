'use strict';


var imgs = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var totalClicks = 0;

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

var showVotes = document.getElementById('votes');

var ran1, ran2, ran3;

var showChart;
var chartDrawn = false;

var previousImages = [];

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


function createImg() {
  ran1 = random(1,20)-1;
  while (previousImages.indexOf(ran1) !== -1){  //use the indexof method
    ran1 = random(1,20) -1;
  }
  ran2 = random(1,20)-1;
  while (ran2 === ran1 || previousImages.indexOf(ran2) !== -1){
    ran2 = random(1,20) -1;
  }
  ran3 = random(1,20)-1;
  while (ran3 === ran2 || ran3 === ran1 || previousImages.indexOf(ran3) !== -1){
    ran3 = random(1,20) -1;
  }
  img1.src = imgs[ran1];
  img2.src = imgs[ran2];
  img3.src = imgs[ran3];
  allImageObject[ran1].displayCount ++;
  allImageObject[ran2].displayCount ++;
  allImageObject[ran3].displayCount ++;
  previousImages = [ran1, ran2, ran3];
  console.log ('previousImages: ', previousImages);
}
createImg();

function resultVotes() {
  for (var j = 0; j < allImageObject.length; j++) {
    var ulEl = document.createElement('ul');
    ulEl.textContent = 'Product ' + allImageObject[j].name2 + ': ' + allImageObject[j].clicksPerImage + ' votes';
    showVotes.appendChild(ulEl);
  }
}
//////////////// BELOW ARE EVENT HANDLERS /////////////////////


function eachClick1 (event) {
  var nameClicked = event.target.src;
  totalClicks++;
  allImageObject[ran1].clicksPerImage++;
  if (totalClicks < 25) {
    createImg();
  } else {
    alert('You have reached 25 clicks. Thank you for your participation.');
    resultVotes();
    document.getElementById('draw-chart').hidden = false;
    img1.removeEventListener('click', eachClick1);
    updateChartArrays();
  }
}


function eachClick2 (event) {
  var nameClicked = event.target.src;
  totalClicks++;
  allImageObject[ran2].clicksPerImage++;
  if (totalClicks < 25) {
    createImg();
  } else {
    alert('You have reached 25 clicks. Thank you for your participation.');
    resultVotes();
    document.getElementById('draw-chart').hidden = false;
    img2.removeEventListener('click', eachClick2);
    updateChartArrays();
  }
}


function eachClick3 (event) {
  var nameClicked = event.target.src;
  totalClicks++;
  allImageObject[ran3].clicksPerImage++;
  if (totalClicks < 25) {
    createImg();
  } else {
    alert('You have reached 25 clicks. Thank you for your participation.');
    resultVotes();
    document.getElementById('draw-chart').hidden = false;
    img3.removeEventListener('click', eachClick3);
    updateChartArrays();
  }
}

console.log(totalClicks);

//++++++++++++++++++++++++++++++++++++++++++++++++
//chart setup here
//++++++++++++++++++++++++++++++++++++++++++++++++

var product = [];
var votes = [];

function updateChartArrays (){
  for (var i=0; i < allImageObject.length; i++) {
    product[i] = allImageObject[i].name2;
    votes[i] = allImageObject[i].clicksPerImage;
  }
}

var data = {
  labels: product,
  datasets: [{
    data: votes,
    backgroundColor: [
      'red',
      'lightblue',
      'navy',
      'red',
      'lightblue',
      'navy',
      'red',
      'lightblue',
      'navy',
      'red',
      'lightblue',
      'navy'
    ],
    hoverBackgroundColor: [
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple'
    ],
  }]
};

function drawChart (){
  var ctx = document.getElementById('vote-chart').getContext('2d'); // "msGetInpurContext" or "getContext"?
  showChart = new Chart (ctx, {
    type: 'polarArea',
    data: data,
    options: {
      responsive: false, //set it to false so you can change the size of the chart (otherwise will be entire screen)
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//HIDE BUTTON HERE
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++


document.getElementById('draw-chart').hidden = true;



document.getElementById('draw-chart').addEventListener('click', function() {
  drawChart();
  document.getElementById('draw-chart').hidden = true;
});


document.getElementById('draw-chart').addEventListener('click', function() {
  document.getElementById('votes').hidden = true;
});



img1.addEventListener('click', eachClick1);
img2.addEventListener('click', eachClick2);
img3.addEventListener('click', eachClick3);






