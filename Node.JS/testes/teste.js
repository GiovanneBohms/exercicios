function corrigirData(dataStr) {
  const regex = /(\d{1,2}): \+(\d+)/;
  const novaDataStr = dataStr.replace(regex, (match, hora, fuso) => {
    const horaFormatada = hora.padStart(2, '0');
    const fusoFormatado = fuso.padStart(4, '0');

    return `${horaFormatada}:00:00 +${fusoFormatado}`;
  });

  return new Date(novaDataStr);
}

// Teste
const dataOriginal = "May 23 2025 18: +0";
const dataCorrigida = corrigirData(dataOriginal);

console.log("Data corrigida:", dataCorrigida.toString());
