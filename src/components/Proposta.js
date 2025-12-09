function Proposta() {
  return (
    <div className="proposta-container">
      <div className="proposta-header">
        <div className="proposta-header-subitem">
          <h4>Fecha creación</h4>
        </div>
        <div className="proposta-header-subitem">
          <h4>Frase</h4>
        </div>
        <div className="proposta-header-subitem">
          <h4>Nom del creador</h4>
        </div>
      </div>
      <div className="proposta-content">
        <div className="proposta-titol">
          <h3>Titol</h3>
        </div>
        <div className="proposta-resum">
          <h3>Resum</h3>
          <h3>Mapa</h3>
        </div>
        <div className="proposta-formatada">
          <p>Proposta formatada</p>
          <div className="proposta-formatada-footer">
            <button>Descargar</button>
            <button>Leer mas</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposta;
