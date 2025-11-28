import React from 'react';
import { MessageCircle, FileText, CreditCard } from 'lucide-react';

function App() {
  // Substitua pelo número real do WhatsApp
  const whatsappNumber = "5511999999999"; // Formato: código do país + DDD + número

  const handleWhatsAppRedirect = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              <span className="text-blue-600">A</span>egea
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bem-vindo à Aegea
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Escolha uma das opções abaixo para ser atendido de forma rápida e eficiente
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* 2ª Via de Fatura */}
          <div className="group">
            <button
              onClick={() => handleWhatsAppRedirect("Olá! Gostaria de solicitar a 2ª via da minha fatura.")}
              className="w-full bg-white hover:bg-blue-50 border-2 border-blue-100 hover:border-blue-300 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-blue-100 group-hover:bg-blue-200 rounded-full p-4 transition-colors duration-300">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  2ª Via de Fatura
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Solicite a segunda via da sua conta de forma rápida e prática
                </p>
              </div>
            </button>
          </div>

          {/* Negociação de Dívidas */}
          <div className="group">
            <button
              onClick={() => handleWhatsAppRedirect("Olá! Gostaria de negociar minhas pendências financeiras.")}
              className="w-full bg-white hover:bg-green-50 border-2 border-green-100 hover:border-green-300 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-green-100 group-hover:bg-green-200 rounded-full p-4 transition-colors duration-300">
                  <CreditCard className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                  Negociação de Dívidas
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Negocie suas pendências com condições especiais de pagamento
                </p>
              </div>
            </button>
          </div>

          {/* Falar com Atendente */}
          <div className="group">
            <button
              onClick={() => handleWhatsAppRedirect("Olá! Gostaria de falar com um atendente.")}
              className="w-full bg-white hover:bg-cyan-50 border-2 border-cyan-100 hover:border-cyan-300 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-cyan-100 group-hover:bg-cyan-200 rounded-full p-4 transition-colors duration-300">
                  <MessageCircle className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-cyan-700 transition-colors duration-300">
                  Falar com Atendente
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Converse diretamente com nossa equipe de atendimento
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Atendimento via WhatsApp
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nossa equipe está pronta para atendê-lo através do WhatsApp. 
              Clique em uma das opções acima para iniciar o atendimento.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-500">
              © 2025 Aegea - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;