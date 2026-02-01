function CrearVotacio() {
  return (
    <div className="crear-proposta-container">
      <div className="crear-proposta-right-side">
        <h1>Crear Votació</h1>
        <form className="form-group">
          <input type="text" id="nom" name="nom" placeholder="Nom" />
          <input
            type="text"
            id="descripcio"
            name="descripcio"
            placeholder="Descripció"
          />
          <button type="submit"> Afegir Contingut </button>
        </form>
      </div>
      <div className="crear-proposta-left-side">
        <div className="crear-votacio-left-side-container">
          <form className="crear-votacio-left-side-form">
            <div className="crear-votacio-left-side-form-option">
              <label htmlFor="pregunta">Opcio A</label>
              <input
                type="text"
                id="a"
                name="a"
                placeholder="Opcio A"
              />
            </div>
            <div className="crear-votacio-left-side-form-option">
              <label htmlFor="pregunta">Opcio B</label>
              <input
                type="text"
                id="b"
                name="b"
                placeholder="Opcio B"
              />
            </div>
            <div className="crear-votacio-left-side-form-option">
              <label htmlFor="pregunta">Opcio C</label>
              <input
                type="text"
                id="c"
                name="c"
                placeholder="Opcio C"
              />
            </div>
            <div className="crear-votacio-left-side-form-option">
              <label htmlFor="pregunta">Opcio D</label>
              <input
                type="text"
                id="d"
                name="d"
                placeholder="Opcio D"
              />
            </div>

            <label htmlFor="pregunta">Resposta Multiple</label>
            <input
              type="checkbox"
              id="pregunta"
              name="pregunta"
              placeholder="Pregunta"
            />
          </form>
        </div>

        <div className="crear-proposta-left-side-buttons">
          <button type="submit"> Crear Proposta </button>
        </div>
      </div>
    </div>
  );
}

export default CrearVotacio;
