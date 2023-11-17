// Algoritmo utilizando un ciclo

let suma = 0;

while (suma < 100) {
  let numero = prompt("Ingrese un número: ");

  if (numero === null) {
    // Se cancela el circuito si el usuario no ingresa un numero.
    break;
  }

  numero = parseInt(numero);

  if (isNaN(numero)) {
    alert("No es un número válido");
  } else {
    suma += numero;
    alert("Suma actual: " + suma);
  }
}

if (suma >= 100) {
  alert("Has alcanzado o superado 100. Suma finalizada");
} else {
  alert("Has salido del ciclo. Suma finalizada");
}