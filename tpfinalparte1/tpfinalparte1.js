//Galan Brisa 119033/2 y Uriel Ian Villordo 120384/0
//https://youtu.be/Paa2thcOkgM 
let fondo = [];
let texto = [];
let pantalla; //Variable para rastrear la pantalla actual del juego.
let sonido;
//declaracion de variables
function preload() {
  sonido = loadSound("data/piano.mp3");
  texto = loadStrings("data/textos.txt");
  A = loadImage("data/flecha.png");
  B = loadImage("data/flechae.png");
  for (i=0; i<26; i++) {
    fondo[i] = loadImage("data/fondo"+i+".png"); //bucle que se encarga de guardar 26 imagenes de fondo en el array fondo
  }
}


function setup() {
  createCanvas (640, 480);
  for (i=0; i<26; i++) {
    fondo[i].resize(480, 480);
  }
  pantalla = 0; //inicia la variable de pantalla, la cual sirve para representar la pantalla inicial
}


function draw() {
  background(1);
   if (pantalla == 4) {
    DatosDePantalla(0, 250, pantalla);
  } else if (pantalla == 7) {
    DatosDePantalla(0, 250, pantalla);
  } else if (pantalla == 15) {
    DatosDePantalla(0, 250, pantalla);
  } else {
    DatosDePantalla(0, 0, pantalla);
  }
  cargaTexto(0, 10, 600, 500, pantalla);
}
function loadfondo(img, x, y, anch, alt) {
  fill(0, 0, 0, 0);
  image(img, x, y, anch, alt);
}


function flecha(N, x, y, ancho, alto) {
  image(N, x, y, ancho, alto);
}


function boton(x, y, ancho, alto, N, d) {
  push();
  fill(0, 0, 0, d);
  flecha(N, x, y, ancho, alto);
  detectarBoton(x, y, ancho, alto, 200);
  pop();
  push();
  noStroke();
  fill(94, 112, 72, d);
  rect(x, y, ancho, alto, 50, 20);
  opciones(d);
  pop();

}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}

function mousePressed() {
  BotonesDePantallas();

}

function keyPressed() {
  pantalla = 0;
  
}
