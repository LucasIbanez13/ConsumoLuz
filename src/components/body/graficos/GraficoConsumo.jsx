import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Legend } from 'recharts';

const GraficoConsumo = ({ datos }) => {
  const data = [
    {
      name: 'Consumo (kWh)',
      Anterior: parseFloat(datos.consumoAnterior),
      Actual: parseFloat(datos.consumoActual),
    },
    {
      name: 'Costo ($)',
      Anterior: parseFloat(datos.costoAnterior),
      Actual: parseFloat(datos.costoActual),
    },
  ];

  const dataIncremento = [
    {
      name: 'Incremento (%)',
      Consumo: parseFloat(datos.porcentajeConsumo),
      Costo: parseFloat(datos.porcentajeCosto),
    },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-lg font-bold mb-4">Visualización del Consumo y Costo</h3>

      <div className="mb-8">
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Anterior" fill="#8884d8" />
          <Bar dataKey="Actual" fill="#82ca9d" />
        </BarChart>
      </div>

    </div>
  );
};

export default GraficoConsumo;
