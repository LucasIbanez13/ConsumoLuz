import React, { useState } from 'react';
import calcularConsumo from '../../../utils/calcularConsumo';
import GraficoConsumo from '../graficos/GraficoConsumo';

const ConsumoForm = () => {
  const [datos, setDatos] = useState({
    consumoAnterior: '',
    consumoActual: '',
    costoAnterior: '',
    costoActual: ''
  });

  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultados = calcularConsumo(datos);
    setResultado(resultados);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Calculadora de Consumo de Energía</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Consumo Anterior (kWh):</label>
          <input
            type="number"
            name="consumoAnterior"
            value={datos.consumoAnterior}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Consumo Actual (kWh):</label>
          <input
            type="number"
            name="consumoActual"
            value={datos.consumoActual}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Costo Anterior:</label>
          <input
            type="number"
            name="costoAnterior"
            value={datos.costoAnterior}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Costo Actual:</label>
          <input
            type="number"
            name="costoActual"
            value={datos.costoActual}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
        >
          Calcular
        </button>
      </form>

      {resultado && (
        <div className="mt-6">
          <h3 className="text-lg font-bold">Resultados:</h3>
          <p>Incremento de Consumo: {resultado.incrementoConsumo} kWh</p>
          <p>Incremento en Costo: ${resultado.incrementoCosto}</p>
          <p>Porcentaje de Incremento en Consumo: {resultado.porcentajeConsumo}%</p>
          <p>Porcentaje de Incremento en Costo: {resultado.porcentajeCosto}%</p>

          <GraficoConsumo datos={{ ...datos, ...resultado }} />
        </div>
      )}
    </div>
  );
};

export default ConsumoForm;
