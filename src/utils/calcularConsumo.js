const limpiarNumero = (valor) => {
  // Si el valor contiene tanto puntos como comas, asumimos que el último separador es decimal.
  // Convertimos todas las comas en puntos (para los decimales) y eliminamos los puntos que actúan como separadores de miles.
  
  // Eliminar puntos que actúan como separadores de miles
  let valorLimpio = valor.replace(/\.(?=\d{3})/g, '');
  
  // Convertir comas en puntos para los decimales
  valorLimpio = valorLimpio.replace(/,/g, '.');

  // Convertir el string limpio en un número flotante
  return parseFloat(valorLimpio);
};

const calcularConsumo = ({ consumoAnterior, consumoActual, costoAnterior, costoActual }) => {
  // Limpieza y conversión de las entradas
  const consumoAnteriorNum = limpiarNumero(consumoAnterior);
  const consumoActualNum = limpiarNumero(consumoActual);
  const costoAnteriorNum = limpiarNumero(costoAnterior);
  const costoActualNum = limpiarNumero(costoActual);

  // Cálculos
  const incrementoConsumo = consumoActualNum - consumoAnteriorNum;
  const incrementoCosto = costoActualNum - costoAnteriorNum;

  // Cálculo de porcentajes
  const porcentajeConsumo = ((incrementoConsumo / consumoAnteriorNum) * 100).toFixed(2);
  const porcentajeCosto = ((incrementoCosto / costoAnteriorNum) * 100).toFixed(2);

  // Formateo de números a formato con miles
  return {
    incrementoConsumo: incrementoConsumo.toLocaleString(),
    incrementoCosto: incrementoCosto.toLocaleString(),
    porcentajeConsumo: porcentajeConsumo.toLocaleString(),
    porcentajeCosto: porcentajeCosto.toLocaleString(),
  };
};

export default calcularConsumo;
