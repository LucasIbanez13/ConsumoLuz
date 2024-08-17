export function formatearNumero(valor) {
    // Eliminar cualquier punto existente antes de convertir a número
    const valorSinPuntos = valor.toString().replace(/\./g, '');
    
    // Convertir el valor a un número
    const numero = Number(valorSinPuntos);
    
    // Verificar si el valor es un número válido
    if (isNaN(numero)) return valor; // Retornar el valor original si no es un número válido
    
    // Formatear el número con separadores de miles
    return numero.toLocaleString('de-DE'); // Uso de formato europeo
  }
  