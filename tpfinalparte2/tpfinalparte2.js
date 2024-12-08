//Galan Brisa 119033/2 y Uriel Ian Villordo 120384/0
//https://youtu.be/k-wASTqwv0M?si=XhqOqF4dNy7ZZTto
let imgFondo;
let imgArma;
let sonido;
function preload() {
  disparo = loadSound("data/disparo.mp3");
  imgExtranjero = loadImage('data/extranjero.png');
  imgBala = loadImage('data/bullet.png');
  imgPerdiste = loadImage('data/perdiste.png');
  imgGanaste = loadImage('data/ganaste.png');
  imgArma = loadImage('data/Arma.png');
  imgFondo = loadImage('data/fondo.png');
  imgInicio = loadImage('data/inicio.png');
}
function setup() {
  createCanvas (640, 480);
  j = new juego();
}


function draw() {
  background(200);
  j.mostrar();
  j.actualizar(); //se encargan de mostrar los elementos en pantalla y actualizar las condiciones del juego.
}
function mousePressed() {
  j.shoot();
}

function keyPressed() {
  j.reinicio();
}
