import Button from '@mui/material/Button';

function CreacioPosts() {
  return (
    <div className="creacio-posts-container">
      <div className="creacio-posts-buttons">
        <Button variant="contained" size="large" className="creacio-posts-button">Crear proposta de llei</Button>
      </div>
      <div className="creacio-posts-buttons">
        <Button variant="contained" size="large" className="creacio-posts-button">Votació random</Button>
      </div>
      <div className="creacio-posts-buttons">
        <Button variant="contained" size="large" className="creacio-posts-button">Crear sala privada</Button>
      </div>
    </div>
  );
}

export default CreacioPosts;
