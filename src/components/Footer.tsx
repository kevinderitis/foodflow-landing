import React from 'react';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491170964243?text=Hola!%20Quiero%20más%20información%20sobre%20FoodFlow', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/F266C9D2-468D-4A1A-820C-69EFC86C6862.png" 
                alt="FoodFlow Logo" 
                className="h-12 w-12"
              />
              <span className="ml-2 text-2xl font-bold">FoodFlow</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              La solución completa para que tu restaurante tenga más pedidos, menos comisiones y atención automatizada 24/7.
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Contactar por WhatsApp
            </button>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">App Restaurantes</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Chatbot WhatsApp</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Menú Digital</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Sistema de Pedidos</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Fidelización</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <span>+54 9 11 7096-4243</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4 text-green-500" />
                <span>hola@foodflow.com.ar</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4 text-green-500" />
                <span>Argentina - Todo el país</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="h-4 w-4 text-green-500" />
                <span>24 horas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 FoodFlow. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Términos y Condiciones</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Política de Privacidad</a>
            </div>
          </div>
        </div>

        {/* Final CTA Bar */}
        <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">¿Querés ver cómo quedaría para tu restaurante?</p>
          <p className="text-green-100 mb-4">Te respondemos al instante por WhatsApp</p>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Contactar Ahora
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;