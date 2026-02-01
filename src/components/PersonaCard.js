import org1 from "../img/org1.jpg";

function PersonaCard() {
  return (
    <div className="persona-card-content">
      <div className="persona-card">
        <div className="persona-foto">
          <img src={org1} alt="organitzador 1" className="persona-foto-img" />
        </div>
        <div className="persona-info">
          <h3 className="persona-nombre">Organitzador 1</h3>
          <p className="persona-descripcion">Descripcion de la persona</p>
        </div>
        <div className="persona-info">
          <h3 className="persona-seguidors">Seguidors: 100</h3>
          <button className="persona-botor-seguir">Seguir</button>
        </div>
        <div className="persona-info">
          <h3 className="persona-num-propostes">Propostes: 100</h3>
          <button className="persona-botor-chat">Chateja</button>
        </div>
      </div>
      <div className="persona-card-shared">
        <button className="persona-botons">Propostes Propies</button>
        <button className="persona-botons">Compartit</button>
      </div>
      <div className="persona-card-content-bottom">

      </div>
    </div>
  );
}

export default PersonaCard;
