// 1. Contar número total de palabras
function contarPalabras(texto, bandera) {
  if (!bandera) return;
  let palabras = [], palabra = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " " && texto[i] !== "\n") palabra += texto[i];
    else if (palabra.length > 0) { palabras.push(palabra); palabra = ""; }
  }
  if (palabra.length > 0) palabras.push(palabra);
  console.log("1. Palabras:", palabras.length);
}

// 2. Contar signos de puntuación
function contarSignos(texto, bandera) {
  if (!bandera) return;
  let signos = [".", ",", ";", ":", "!", "?", "¿", "¡", '"'], contador = 0;
  for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < signos.length; j++) {
      if (texto[i] === signos[j]) contador++;
    }
  }
  console.log("2. Signos de puntuación:", contador);
}

// 3. Contar vocales
function contarVocales(texto, bandera) {
  if (!bandera) return;
  let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"], contador = 0;
  for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
      if (texto[i] === vocales[j]) contador++;
    }
  }
  console.log("3. Vocales:", contador);
}

// 4. Contar consonantes
function contarConsonantes(texto, bandera) {
  if (!bandera) return;
  let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"], contador = 0;
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
  console.log("4. Consonantes:", contador);
}

// 5. Contar dígitos
function contarDigitos(texto, bandera) {
  if (!bandera) return;
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] >= "0" && texto[i] <= "9") contador++;
  }
  console.log("5. Dígitos:", contador);
}

// 6. Palabras que empiezan en mayúscula
function contarMayusInicial(texto, bandera) {
  if (!bandera) return;
  let palabras = [], palabra = "", contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " " && texto[i] !== "\n") palabra += texto[i];
    else if (palabra.length > 0) { palabras.push(palabra); palabra = ""; }
  }
  if (palabra.length > 0) palabras.push(palabra);
  for (let i = 0; i < palabras.length; i++) {
    let letra = palabras[i][0];
    if (letra >= "A" && letra <= "Z") contador++;
  }
  console.log("6. Mayúsculas iniciales:", contador);
}

// 7. Palabras que empiezan en minúscula
function contarMinusInicial(texto, bandera) {
  if (!bandera) return;
  let palabras = [], palabra = "", contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " " && texto[i] !== "\n") palabra += texto[i];
    else if (palabra.length > 0) { palabras.push(palabra); palabra = ""; }
  }
  if (palabra.length > 0) palabras.push(palabra);
  for (let i = 0; i < palabras.length; i++) {
    let letra = palabras[i][0];
    if (letra >= "a" && letra <= "z") contador++;
  }
  console.log("7. Minúsculas iniciales:", contador);
}

// 8. Contar párrafos
function contarParrafos(texto, bandera) {
  if (!bandera) return;
  let parrafos = [], linea = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== "\n") linea += texto[i];
    else if (linea.length > 0) { parrafos.push(linea); linea = ""; }
  }
  if (linea.length > 0) parrafos.push(linea);
  console.log("8. Párrafos:", parrafos.length);
}

// 9. Invertir texto
function invertirTexto(texto, bandera) {
  if (!bandera) return;
  let invertido = [];
  for (let i = texto.length - 1; i >= 0; i--) invertido.push(texto[i]);
  let resultado = "";
  for (let i = 0; i < invertido.length; i++) resultado += invertido[i];
  console.log("9. Texto invertido:", resultado);
}

// 10. Contar todos los caracteres
function contarCaracteres(texto, bandera) {
  if (!bandera) return;
  console.log("10. Total de caracteres:", texto.length);
}

// 11. Buscar palabra exacta
function buscarPalabra(texto, palabra, bandera) {
  if (!bandera) return;
  let palabras = [], actual = "", encontrada = false;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " " && texto[i] !== "\n") actual += texto[i];
    else if (actual.length > 0) { palabras.push(actual); actual = ""; }
  }
  if (actual.length > 0) palabras.push(actual);
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === palabra) encontrada = true;
  }
  console.log("11. Buscar palabra:", encontrada ? "Sí está" : "No está");
}

// 12. Contar un carácter específico
function contarCaracter(texto, caracter, bandera) {
  if (!bandera) return;
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caracter) contador++;
  }
  console.log("12. Carácter '" + caracter + "' aparece:", contador);
}

// 13. Caracteres en posiciones pares
function contarPares(texto, bandera) {
  if (!bandera) return;
  let contador = 0;
  for (let i = 0; i < texto.length; i += 2) contador++;
  console.log("13. Posiciones pares:", contador);
}

// 14. Caracteres en posiciones impares
function contarImpares(texto, bandera) {
  if (!bandera) return;
  let contador = 0;
  for (let i = 1; i < texto.length; i += 2) contador++;
  console.log("14. Posiciones impares:", contador);
}

// 15. Añadir texto al inicio y al final
function agregarFragmento(texto, fragmento, bandera) {
  if (!bandera) return;
  let inicio = fragmento + " " + texto;
  let final = texto + " " + fragmento;
  console.log("15. Al inicio:", inicio);
  console.log("15. Al final:", final);
}
