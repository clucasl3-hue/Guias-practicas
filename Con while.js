// 1. Contar número total de palabras
function contarPalabras(texto, bandera) {
  if (!bandera) return;
  let palabras = [], palabra = "";
  let i = 0;
  while (i < texto.length) {
    if (texto[i] !== " " && texto[i] !== "\n") {
      palabra += texto[i];
    } else if (palabra.length > 0) {
      palabras.push(palabra);
      palabra = "";
    }
    i++;
  }
  if (palabra.length > 0) palabras.push(palabra);
  console.log("1. Palabras:", palabras.length);
}

// 2. Contar signos de puntuación
function contarSignos(texto, bandera) {
  if (!bandera) return;
  let signos = [".", ",", ";", ":", "!", "?", "¿", "¡", '"'];
  let contador = 0, i = 0;
  while (i < texto.length) {
    let j = 0;
    while (j < signos.length) {
      if (texto[i] === signos[j]) contador++;
      j++;
    }
    i++;
  }
  console.log("2. Signos de puntuación:", contador);
}

// 3. Contar vocales
function contarVocales(texto, bandera) {
  if (!bandera) return;
  let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let contador = 0, i = 0;
  while (i < texto.length) {
    let j = 0;
    while (j < vocales.length) {
      if (texto[i] === vocales[j]) contador++;
      j++;
    }
    i++;
  }
  console.log("3. Vocales:", contador);
}

// 4. Contar consonantes
function contarConsonantes(texto, bandera) {
  if (!bandera) return;
  let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let contador = 0, i = 0;
  while (i < texto.length) {
    let letra = texto[i];
    if ((letra >= "A" && letra <= "Z") || (letra >= "a" && letra <= "z")) {
      let esVocal = false, j = 0;
      while (j < vocales.length) {
        if (letra === vocales[j]) esVocal = true;
        j++;
      }
      if (!esVocal) contador++;
    }
    i++;
  }
  console.log("4. Consonantes:", contador);
}

// 5. Contar dígitos
function contarDigitos(texto, bandera) {
  if (!bandera) return;
  let contador = 0, i = 0;
  while (i < texto.length) {
    if (texto[i] >= "0" && texto[i] <= "9") contador++;
    i++;
  }
  console.log("5. Dígitos:", contador);
}

// 6. Palabras que empiezan en mayúscula
function contarMayusInicial(texto, bandera) {
  if (!bandera) return;
  let palabras = [], palabra = "", i = 0;
  while (i < texto.length) {
    if (texto[i] !== " " && texto[i] !== "\n") {
      palabra += texto[i];
    } else if (palabra.length > 0) {
      palabras.push(palabra);
      palabra = "";
    }
    i++;
  }
  if (palabra.length > 0) palabras.push(palabra);
  let contador = 0, j = 0;
  while (j < palabras.length) {
    if (palabras[j][0] >= "A" && palabras[j][0] <= "Z") contador++;
    j++;
  }
  console.log("6. Mayúsculas iniciales:", contador);
}

// 7. Palabras que empiezan en minúscula
function contarMinusInicial(texto, bandera) {
  if (!bandera) return;
  let palabras = [], palabra = "", i = 0;
  while (i < texto.length) {
    if (texto[i] !== " " && texto[i] !== "\n") {
      palabra += texto[i];
    } else if (palabra.length > 0) {
      palabras.push(palabra);
      palabra = "";
    }
    i++;
  }
  if (palabra.length > 0) palabras.push(palabra);
  let contador = 0, j = 0;
  while (j < palabras.length) {
    if (palabras[j][0] >= "a" && palabras[j][0] <= "z") contador++;
    j++;
  }
  console.log("7. Minúsculas iniciales:", contador);
}

// 8. Contar párrafos
function contarParrafos(texto, bandera) {
  if (!bandera) return;
  let parrafos = [], linea = "", i = 0;
  while (i < texto.length) {
    if (texto[i] !== "\n") {
      linea += texto[i];
    } else if (linea.length > 0) {
      parrafos.push(linea);
      linea = "";
    }
    i++;
  }
  if (linea.length > 0) parrafos.push(linea);
  console.log("8. Párrafos:", parrafos.length);
}

// 9. Invertir texto
function invertirTexto(texto, bandera) {
  if (!bandera) return;
  let invertido = [], i = texto.length - 1;
  while (i >= 0) {
    invertido.push(texto[i]);
    i--;
  }
  let resultado = "", j = 0;
  while (j < invertido.length) {
    resultado += invertido[j];
    j++;
  }
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
  let palabras = [], actual = "", i = 0;
  while (i < texto.length) {
    if (texto[i] !== " " && texto[i] !== "\n") {
      actual += texto[i];
    } else if (actual.length > 0) {
      palabras.push(actual);
      actual = "";
    }
    i++;
  }
  if (actual.length > 0) palabras.push(actual);
  let encontrada = false, j = 0;
  while (j < palabras.length) {
    if (palabras[j] === palabra) encontrada = true;
    j++;
  }
  console.log("11. Buscar palabra:", encontrada ? "Sí está" : "No está");
}

// 12. Contar un carácter específico
function contarCaracter(texto, caracter, bandera) {
  if (!bandera) return;
  let contador = 0, i = 0;
  while (i < texto.length) {
    if (texto[i] === caracter) contador++;
    i++;
  }
  console.log("12. Carácter '" + caracter + "' aparece:", contador);
}

// 13. Caracteres en posiciones pares
function contarPares(texto, bandera) {
  if (!bandera) return;
  let contador = 0, i = 0;
  while (i < texto.length) {
    contador++;
    i += 2;
  }
  console.log("13. Posiciones pares:", contador);
}

// 14. Caracteres en posiciones impares
function contarImpares(texto, bandera) {
  if (!bandera) return;
  let contador = 0, i = 1;
  while (i < texto.length) {
    contador++;
    i += 2;
  }
  console.log("14. Posiciones impares:", contador);
}

// 15. Añadir texto al inicio y al final
function agregarFragmento(texto, fragmento, bandera) {
  if (!bandera) return;
  let inicio = "", final = "";
  let i = 0;
  while (i < fragmento.length) {
    inicio += fragmento[i];
    i++;
  }
  inicio += " ";
  i = 0;
  while (i < texto.length) {
    inicio += texto[i];
    i++;
  }
  i = 0;
  while (i < texto.length) {
    final += texto[i];
    i++;
  }
  final += " ";
  i = 0;
  while (i < fragmento.length) {
    final += fragmento[i];
    i++;
  }
  console.log("15. Al inicio:", inicio);
  console.log("15. Al final:", final);
}
