const Columns = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Suporte */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Suporte</h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Centro de ajudas
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Informações de segurança
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Opções de cancelamento
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Acessibilidade para necessitados
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Reportar preocupações
            </a>
          </li>
        </ul>
      </div>

      {/* Comunidade */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Comunidade</h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Bairro colato
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Vila Kennedy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Recanto verde
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Lajeado seco
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Outras comunidades relevantes
            </a>
          </li>
        </ul>
      </div>

      {/* Hospedagem */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Hospedagem</h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Anuncie seu espaço
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Proteção para anfitriões
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Explorar recursos de hospedagem
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Como anunciar de forma segura
            </a>
          </li>
        </ul>
      </div>

      {/* Sobre */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Sobre</h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Sobre nós
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Notícias
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Funcionalidades
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Carreiras
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Investidores
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Columns;
