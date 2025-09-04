import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      business: "Pizzería Don Carlos - Villa Carlos Paz",
      content: "En 2 semanas aumentamos 40% los pedidos. El chatbot responde al toque y los clientes están felices. Ya no pagamos comisiones a las apps.",
      rating: 5,
      metric: "+40% pedidos"
    },
    {
      name: "María González", 
      business: "Empanadas de la Abuela - Córdoba Capital",
      content: "Increíble! Antes perdíamos pedidos porque no podíamos atender WhatsApp. Ahora el bot toma todo automático, hasta de madrugada.",
      rating: 5,
      metric: "24/7 automatizado"
    },
    {
      name: "Roberto Silva",
      business: "Parrilla El Gaucho - Buenos Aires",
      content: "La inversión se pagó sola en el primer mes. Cero comisiones y más control sobre nuestros clientes. El setup fue súper rápido.",
      rating: 5,
      metric: "ROI primer mes"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
              💬 Casos de Éxito
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Restaurantes que ya están ganando más
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mirá los resultados reales de dueños de restaurantes que implementaron FoodFlow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-green-600 opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
                <p className="text-green-100">Restaurantes activos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">10.000+</div>
                <p className="text-green-100">Pedidos procesados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">4.9★</div>
                <p className="text-green-100">Promedio de satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;