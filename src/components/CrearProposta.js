function CrearProposta() {
  return (
    <div className="crear-proposta-container">
      <div className="crear-proposta-right-side">
        <h1>Crear Proposta de Llei</h1>
        <form className="form-group">
          <input
            type="text"
            id="commentary"
            name="commentary"
            placeholder="Comentari propi"
          />
          <input type="text" id="title" name="title" placeholder="Títol" />
          <button type="submit"> Afegir Contingut </button>
          <input
            type="text"
            id="AiSummary"
            name="AiSummary"
            placeholder="Resum IA (Modificable)"
          />
          <div className="numfirms-and-place-container">
            <input
              type="number"
              id="numfirms"
              name="numfirms"
              placeholder="Nombre de firmes"
            />
            <input type="text" id="place" name="place" placeholder="Lloc" />
          </div>
        </form>
      </div>
      <div className="crear-proposta-left-side">
        <input
          id="proposta"
          type="text"
          value="Proposta de llei"
          readOnly={true}
          className="proposta-textarea"
        />
        <div className="crear-proposta-left-side-buttons">
          <button type="submit"> Crear Proposta </button>
        </div>
      </div>
    </div>
  );
}

export default CrearProposta;
