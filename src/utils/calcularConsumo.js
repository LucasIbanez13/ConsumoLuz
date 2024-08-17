const calcularConsumo = ({ consumoAnterior, consumoActual, costoAnterior, costoActual }) => {
    // Convertimos las entradas a números para asegurarnos de que se pueden calcular
    const consumoAnteriorNum = parseFloat(consumoAnterior);
    const consumoActualNum = parseFloat(consumoActual);
    const costoAnteriorNum = parseFloat(costoAnterior);
    const costoActualNum = parseFloat(costoActual);
  
    // Cálculos
    const incrementoConsumo = consumoActualNum - consumoAnteriorNum;
    const incrementoCosto = costoActualNum - costoAnteriorNum;
  
    // Cálculo de porcentajes
    const porcentajeConsumo = ((incrementoConsumo / consumoAnteriorNum) * 100).toFixed(2);
    const porcentajeCosto = ((incrementoCosto / costoAnteriorNum) * 100).toFixed(2);
  
    return {
      incrementoConsumo,
      incrementoCosto,
      porcentajeConsumo,
      porcentajeCosto
    };
  };
  
  export default calcularConsumo;
  