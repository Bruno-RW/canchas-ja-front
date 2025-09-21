const Columns = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Suporte */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Suporte</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Centro de ajudas</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Informações de segurança</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Opções de cancelamento</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Acessibilidade para necessitados</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Reportar preocupações</a>
          </li>
        </ul>
      </div>

      {/* Comunidade */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Comunidade</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Bairro colato</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Vila Kennedy</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Recanto verde</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Lajeado seco</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Outras comunidades relevantes</a>
          </li>
        </ul>
      </div>

      {/* Hospedagem */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Hospedagem</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Anuncie seu espaço</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Proteção para anfitriões</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Explorar recursos de hospedagem</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Como anunciar de forma segura</a>
          </li>
        </ul>
      </div>

      {/* Sobre */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Sobre</h3>
        <ul className="space-y-3 text-sm text-brand-text-secondary">
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Sobre nós</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Notícias</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Funcionalidades</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Carreiras</a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-primary hover:underline">Investidores</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Columns;
