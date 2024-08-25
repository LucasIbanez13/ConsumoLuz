import React, { useState } from 'react';

const Otro = () => {
  // Estado para controlar la visibilidad de las respuestas
  const [visible, setVisible] = useState([false, false, false, false, false]);

  // Función para manejar el clic en una pregunta
  const toggleVisibility = (index) => {
    setVisible((prevState) =>
      prevState.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <div className="w-full mx-auto mt-10 p-5 bg-white rounded text-center">
      <h2 className="text-2xl font-bold mb-6 text-black">
        Preguntas Frecuentes sobre Consumo de Energía
      </h2>

      {[
        { question: '¿Qué aparato ocupa más energía en el hogar?', answer: 'El aire acondicionado y la calefacción suelen ser los mayores consumidores de energía en un hogar promedio.' },
        { question: '¿Cómo puedo reducir mi consumo de energía?', answer: 'Puedes reducir el consumo de energía utilizando bombillas LED, apagando los aparatos electrónicos cuando no se usan, y ajustando el termostato.' },
        { question: '¿Cuánta energía consume un refrigerador promedio?', answer: 'Un refrigerador promedio consume entre 100 y 800 kWh al año, dependiendo de su eficiencia y tamaño.' },
        { question: '¿Es más eficiente apagar y encender las luces o dejarlas encendidas?', answer: 'Es más eficiente apagar las luces cuando no las necesitas, incluso si solo te vas por unos minutos.' },
        { question: '¿Los electrodomésticos en modo de espera consumen energía?', answer: 'Sí, los electrodomésticos en modo de espera o standby siguen consumiendo energía, aunque en menor cantidad.' }
      ].map((item, index) => (
        <div key={index} className="mb-4">
          <h3
            className="text-lg font-medium text-gray-600 cursor-pointer"
            onClick={() => toggleVisibility(index)}
          >
            {item.question}
          </h3>
          {visible[index] && <p className="text-gray-700 mt-2">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Otro;
