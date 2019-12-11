//Get reference to canvas
var canvas = document.getElementById("canvas");

//Get reference to canvas context
var context = canvas.getContext("2d");

var load_counter = 0;

//Image variables
var bg = new Image();
var pCircle = new Image();
var rCircle = new Image();
var shadow = new Image();
var mask = new Image();
var oCircle = new Image();
var yCircle = new Image();
var floaties = new Image();

//Create layer list
var layer_list = [
  {
    image: bg,
    src: ".images/IMG_0222.png",
    z_index: -2.25,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1
  },
  {
    image: pCircle,
    src: ".img/2019121119342png",
    z_index: -1.25,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1
  },
  {
    image: rCircle,
    src: ".img/20191211193253.png",
    z_index: -0.5,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1
  },
  {
    image: shadow,
    src: ".img/20191211193259.png",
    z_index: -1.5,
    position: { x: 0, y: 0 },
    blend: "multiply",
    opacity: 1
  },
  {
    image: mask,
    src: ".img/20191211193316.png",
    z_index: 0,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1
  },
  {
    image: oCircle,
    src: ".img/20191211193334.png",
    z_index: 0.8,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1
  },
  {
    image: yCircle,
    src: ".img/20191211193340.png",
    z_index: 1.2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1
  },
  {
    image: floaties,
    src: ".img/20191211193401.png",
    z_index: 2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 0.9
  }
];

layer_list.forEach(function(layer, index) {
  layer.image.inload = function() {
    load_counter += 1;
    if (load_counter >= layer_list.length) {
      drawCanvas();
    }
  };
  layer.image.src = layer.src;
});

function drawCanvas() {
  //Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  //Loop through layers and draw them
  layer_list.forEach(function(layer, index) {
    context.drawImage(layer.image, layer.position.x, layer.position.y);
  });
}
