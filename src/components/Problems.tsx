import React from 'react';
import { MessageCircleX, TrendingDown, Clock, DollarSign } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: MessageCircleX,
      title: "Perdés pedidos en WhatsApp",
      description: "Los clientes escriben y nadie responde rápido. Se van a la competencia.",
      stat: "67% de mensajes sin respuesta inmediata"
    },
    {
      icon: DollarSign,
      title: "Comisiones altísimas",
      description: "Rappi, PedidosYa y Uber Eats se llevan hasta el 30% de cada pedido.",
      stat: "Hasta $300.000/mes en comisiones"
    },
    {
      icon: Clock,
      title: "Menú desactualizado",
      description: "Cambiar precios en 3 apps diferentes es un dolor de cabeza constante.",
      stat: "5 horas/semana actualizando"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Estás perdiendo dinero en tu restaurante?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estos problemas te están costando clientes y dinero todos los días
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors duration-300">
                  <problem.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                <p className="text-red-700 font-semibold text-sm">{problem.stat}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-red-600 text-white px-6 py-4 rounded-xl inline-block">
            <p className="font-bold text-lg">
              ⚠️ Cada día que pasa, perdés más clientes y más dinero
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;