let imgFondo;
let imgArma;
let sonido;
function preload(){
  imgArma = loadImage('data/Arma.png');
  imgFondo = loadImage('data/fondo.jpeg')  
  sonido = loadSound("data/mFondo.mp3");
}
function setup() {
  createCanvas (640, 480);
  j = new juego();
}


function draw() {
    background(200);
    j.mostrar();
    j.actualizar();

}
function mousePressed() {
  j.shoot();
}

function keyPressed(){
  j.reinicio();
}
