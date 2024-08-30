/*Galan brisa comision 1
lejago:119033/2 */
let img;

let contador1 = 0;
let contador2 = 0;

function preload() {
  img = loadImage('data/OPart.jpg'); 
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  image(img, 0, 0);
  for (let i = 400; i <= width; i += 20) {
    for (let j = 0; j <= height; j += 20) { //Genera la cuadricula de cuadros de 20 pixeles en el eje x,y
      cuadrados(i, j);
      rombos(i, j);
    }
  }
}

function cuadrados(x, y) { //funcion propia que NO retorna un valor
  stroke(0);
  strokeWeight(2);
  
  if (x >= 540 && x < 660 && y >= 140 && y < 260) { //si i y x estan dentro de los parametros el cuadrado se pinta de rojo, de lo contrario se pinta de celeste
    if (contador1 === 0) {
      fill(198, 58, 25);
    } else if (contador1 < 5) {
      randomSeed(contador1);
      fill(random(255), random(255), random(255));
    } else {
      contador1 = 0;
    }
  } else {
    if (contador2 === 0) {
      fill(96, 148, 144);
    } else if (contador2 < 5) {
      randomSeed(contador2);
      fill(random(255), random(255), random(255));
    } else {
      contador2 = 0;
    }
  }
  
  rect(x, y, 20, 20);
}

function rombos(x, y) {
  if (x >= 420 && x < 800 && y >= 20 && y < 400) {
    stroke(0);
    strokeWeight(2);
    fill(0);
    beginShape();  //define los vertices de una forma en p5.js, se usa dentro de beginShape() y endShape() para crear formas personalizadas
    vertex(x, y - 7);
    vertex(x + 7, y);
    vertex(x, y + 7);
    vertex(x - 7, y);
    endShape(CLOSE); //el valor close cierra la forma automaticamente conectando el ultimo vertice con el primer vertice.
    lineas(x, y);
  }
}

function lineas(x, y) { //dibuja una linea diagonal dentro del rombo, la direccion de esta depende de direccionLineas
  stroke(255);
  strokeWeight(3);
  if (direccionLineas(x, y)) {
    line(x - 7 / 2, y - 7 / 2, x + 7 / 2, y + 7 / 2);
  } else {
    line(x - 7 / 2, y + 7 / 2, x + 7 / 2, y - 7 / 2);
  }
}

function direccionLineas(x, y) { //determina la direccion de las lineas dentro del rombo dependiendo la posicion del mouse
  if (x >= 540 && x <= 660 && y >= 140 && y <= 260 && mouseX < 600) { //si x,y esta dentro del rango y el raton (mouseX) esta a la izquierda de 600 devuelve true
    return true;
  } else if (x >= 540 && x <= 660 && y >= 140 && y <= 260) { //si x, y esta dentro del rango especifico pero el raton no esta a la izquierda de 600 devuelve false
    return false;
  } else if (mouseX < 600) {//Si x, y no esta dentro del rango especifico pero el raton esta a la izquierda de 600 devuelve false
    return false;
  } else {
    return true;
  }
}

function mousePressed() {
  if (mouseX >= 540 && mouseX < 660 && mouseY >= 140 && mouseY < 260) {
    contador1++;
  } else if (mouseX >= 400 && mouseX <= 800 && mouseY >= 0 && mouseY <= 400) {
    contador2++;
  }
}
