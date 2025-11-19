// 1. Contar número total de palabras
function contarPalabras(texto) {
  let palabras = [];
  let palabra = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " " && texto[i] !== "\n") {
      palabra += texto[i];
    } else if (palabra.length > 0) {
      palabras.push(palabra);
      palabra = "";
    }
  }
  if (palabra.length > 0) palabras.push(palabra);
  return palabras.length;
}

// 2. Contar signos de puntuación
function contarSignos(texto) {
  let signos = [".", ",", ";", ":", "!", "?", "¿", "¡", '"'];
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < signos.length; j++) {
      if (texto[i] === signos[j]) contador++;
    }
  }
  return contador;
}

// 3. Contar vocales
function contarVocales(texto) {
  let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
      if (texto[i] === vocales[j]) contador++;
    }
  }
  return contador;
}

// 4. Contar consonantes
function contarConsonantes(texto) {
  let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if ((letra >= "A" && letra <= "Z") || (letra >= "a" && letra <= "z")) {
      let esVocal = false;
      for (let j = 0; j < vocales.length; j++) {
        if (letra === vocales[j]) esVocal = true;
      }
      if (!esVocal) contador++;
    }
  }
  return contador;
}

// 5. Contar dígitos
function contarDigitos(texto) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] >= "0" && texto[i] <= "9") contador++;
  }
  return contador;
}

// 6. Palabras que empiezan en mayúscula
function contarMayusInicial(texto) {
  let palabras = [];
  let palabra = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " " && texto[i] !== "\n") {
      palabra += texto[i];
    } else {
      if (palabra.length > 0) palabras.push(palabra);
      palabra = "";
    }
  }
  if (palabra.length > 0) palabras.push(palabra);

  let contador = 0;
  for (let i = 0; i < palabras.length; i++) {
    let letra = palabras[i][0];
    if (letra >= "A" && letra <= "Z") contador++;
  }
  return contador;
}

// 7. Palabras que empiezan en minúscula
function contarMinusInicial(texto) {
  let palabras = [];
  let palabra = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " " && texto[i] !== "\n") {
      palabra += texto[i];
    } else {
      if (palabra.length > 0) palabras.push(palabra);
      palabra = "";
    }
  }
  if (palabra.length > 0) palabras.push(palabra);

  let contador = 0;
  for (let i = 0; i < palabras.length; i++) {
    let letra = palabras[i][0];
    if (letra >= "a" && letra <= "z") contador++;
  }
  return contador;
}

// 8. Contar párrafos
function contarParrafos(texto) {
  let parrafos = [];
  let linea = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== "\n") {
      linea += texto[i];
    } else {
      if (linea.length > 0) parrafos.push(linea);
      linea = "";
    }
  }
  if (linea.length > 0) parrafos.push(linea);
  return parrafos.length;
}

// 9. Invertir texto
function invertirTexto(texto) {
  let invertido = [];
  for (let i = texto.length - 1; i >= 0; i--) {
    invertido.push(texto[i]);
  }
  let resultado = "";
  for (let i = 0; i < invertido.length; i++) {
    resultado += invertido[i];
  }
  return resultado;
}

// 10. Contar todos los caracteres
function contarCaracteres(texto) {
  return texto.length;
}

// 11. Buscar palabra exacta
function buscarPalabra(texto, palabra) {
  let palabras = [];
  let actual = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " " && texto[i] !== "\n") {
      actual += texto[i];
    } else {
      if (actual.length > 0) palabras.push(actual);
      actual = "";
    }
  }
  if (actual.length > 0) palabras.push(actual);

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === palabra) return true;
  }
  return false;
}

// 12. Contar un carácter específico
function contarCaracter(texto, caracter) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caracter) contador++;
  }
  return contador;
}

// 13. Caracteres en posiciones pares
function contarPares(texto) {
  let contador = 0;
  for (let i = 0; i < texto.length; i += 2) {
    contador++;
  }
  return contador;
}

// 14. Caracteres en posiciones impares
function contarImpares(texto) {
  let contador = 0;
  for (let i = 1; i < texto.length; i += 2) {
    contador++;
  }
  return contador;
}

// 15. Añadir texto al inicio y al final
function agregarFragmento(texto, fragmento) {
  let inicio = fragmento + " " + texto;
  let final = texto + " " + fragmento;
  return { inicio: inicio, final: final };
}
