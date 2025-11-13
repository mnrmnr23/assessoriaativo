import { FileText, HandshakeIcon, MessageCircle } from 'lucide-react';

function App() {
  const whatsappUrl = "https://wa.me/5571997265261?text=Ol%C3%A1%2C%20Atendimento%20";

  const handleButtonClick = (message: string) => {
    window.open(`${whatsappUrl}%20${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-2xl mb-6 shadow-lg">
              <HandshakeIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              Gestão Neoenergia...
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Escolha uma das opções abaixo para ser atendido rapidamente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <button
              onClick={() => handleButtonClick('- Gostaria de solicitar a 2ª via da fatura')}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-slate-800 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-800 transition-colors duration-300">
                <FileText className="w-8 h-8 text-slate-800 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                2ª Via da Fatura
              </h3>
              <p className="text-slate-600 text-sm">
                Solicite uma segunda via da sua fatura
              </p>
            </button>

            <button
              onClick={() => handleButtonClick('- Gostaria de negociar dívidas')}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-slate-800 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-800 transition-colors duration-300">
                <HandshakeIcon className="w-8 h-8 text-slate-800 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Negociação de Dívidas
              </h3>
              <p className="text-slate-600 text-sm">
                Negocie suas dívidas com condições especiais
              </p>
            </button>

            <button
              onClick={() => handleButtonClick('- Preciso falar com um atendente')}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-slate-800 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-800 transition-colors duration-300">
                <MessageCircle className="w-8 h-8 text-slate-800 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Falar com Atendente
              </h3>
              <p className="text-slate-600 text-sm">
                Converse diretamente com nossa equipe
              </p>
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Atendimento via WhatsApp
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Estamos disponíveis para atendê-lo através do WhatsApp. Clique em uma das opções acima para iniciar o atendimento.
                </p>
                <p className="text-slate-500 text-xs">
                  Horário de atendimento: Segunda a Sexta, das 8h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-8 text-slate-500 text-sm">
        <p>© 2025 Gestão de Ativos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
